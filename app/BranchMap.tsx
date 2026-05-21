"use client";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";

type Branch = {
  index: string;
  name: string;
  tag: string;
  year: string;
  phone: string;
  address: string;
  mapsUrl: string;
  lat: number;
  lng: number;
};

function createPinIcon(label: string, isActive: boolean) {
  const size = isActive ? 28 : 22;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 28 28">
      <circle cx="14" cy="14" r="13"
        fill="${isActive ? "#D94B1F" : "#ffffff"}"
        stroke="#D94B1F"
        stroke-width="${isActive ? 0 : 2.5}" />
      <text x="14" y="18" text-anchor="middle"
        font-family="system-ui, sans-serif"
        font-size="${isActive ? "9" : "8"}"
        font-weight="700"
        fill="${isActive ? "#ffffff" : "#D94B1F"}">${label}</text>
    </svg>
  `;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -(size / 2) - 4],
  });
}

function FlyToActive({ branches, active }: { branches: Branch[]; active: number }) {
  const map = useMap();
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    const b = branches[active];
    map.flyTo([b.lat, b.lng], 14, { duration: 1.2 });
  }, [active, branches, map]);
  return null;
}

// Opens active popup, closes all others
function ManagePopups({ active, markerRefs }: {
  active: number;
  markerRefs: React.MutableRefObject<(L.Marker | null)[]>;
}) {
  const map = useMap();
  useEffect(() => {
    markerRefs.current.forEach((marker, i) => {
      if (!marker) return;
      if (i === active) {
        marker.openPopup();
      } else {
        marker.closePopup();
      }
    });
  }, [active, map, markerRefs]);
  return null;
}

export default function BranchMap({
  branches,
  active,
  onPin,
}: {
  branches: Branch[];
  active: number;
  onPin: (i: number) => void;
}) {
  const center: [number, number] = [23.208, 72.625];
  const markerRefs = useRef<(L.Marker | null)[]>([]);

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <style>{`
        .leaflet-container { font-family: inherit; }
        .leaflet-control-attribution { display: none !important; }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12) !important;
          border-radius: 10px !important;
          overflow: hidden;
          margin-right: 12px !important;
          margin-bottom: 12px !important;
        }
        .leaflet-control-zoom a {
          background: white !important;
          color: #1a1a18 !important;
          border: none !important;
          width: 32px !important;
          height: 32px !important;
          line-height: 32px !important;
          font-size: 16px !important;
        }
        .leaflet-control-zoom a:hover { background: #f5f2ee !important; }
        .branch-popup .leaflet-popup-content-wrapper {
          background: #1a1a18 !important;
          color: white !important;
          border-radius: 12px !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2) !important;
          padding: 0 !important;
          border: none !important;
          min-width: 180px;
        }
        .branch-popup .leaflet-popup-content {
          margin: 0 !important;
          width: auto !important;
        }
        .branch-popup .leaflet-popup-tip-container { margin-top: -1px; }
        .branch-popup .leaflet-popup-tip {
          background: #1a1a18 !important;
          box-shadow: none !important;
        }
        .branch-popup .leaflet-popup-close-button { display: none !important; }
      `}</style>

      <MapContainer
        key="branch-map"
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={true}
        style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution=""
        />

        <FlyToActive branches={branches} active={active} />
        <ManagePopups active={active} markerRefs={markerRefs} />

        {branches.map((b, i) => (
          <Marker
            key={i}
            position={[b.lat, b.lng]}
            icon={createPinIcon(b.index, active === i)}
            ref={(el) => { markerRefs.current[i] = el; }}
            eventHandlers={{ click: () => onPin(i) }}
          >
            <Popup className="branch-popup" closeButton={false} autoClose={false} closeOnClick={false}>
              <div style={{ padding: "10px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", lineHeight: 1.3 }}>
                  {b.name}
                </div>
                <div style={{ fontSize: "12px", color: "#ccc9c4" }}>
                  {b.phone}
                </div>
                <a
                  href={b.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "white",
                    background: "#D94B1F",
                    padding: "5px 10px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    marginTop: "2px",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  Open in Maps
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}