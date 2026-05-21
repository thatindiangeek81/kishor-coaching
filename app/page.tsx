"use client";
import { useState, useEffect } from "react";
import BranchesSection from "./BranchesSection";

export default function Home() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = [
    { grade: "Class 5–8", board: "CBSE & GSEB", tag: "Foundation" },
    { grade: "Class 9–10", board: "CBSE & GSEB", tag: "Board Prep" },
    { grade: "Class 11–12 Sci.", board: "CBSE & GSEB", tag: "Science" },
    { grade: "Class 11–12 Com.", board: "GSEB", tag: "Commerce" },
    { grade: "IIT JEE", board: "Eng. & Guj. Medium", tag: "Competitive" },
    { grade: "NEET / GUJCET", board: "Eng. & Guj. Medium", tag: "Medical" },
  ];

  const stats = [
    { n: "23,500", l: "Students" },
    { n: "8,097+", l: "Kician Engineers" },
    { n: "2,013+", l: "Kician Doctors" },
    { n: "345+", l: "Board Rankers" },
  ];

  const leaders = [
    {
      name: "Shri Kishorsinh L. Rajput",
      role: "Founder & President",
      subject: "Maths & Science Mentor",
      img: "https://kishorinstitute.com/wp-content/uploads/elementor/thumbs/MAX09109-scaled-rbe2omvaxyon6c5evk5l3zf3vjjf699dffypm2moak.jpg",
      index: "01",
    },
    {
      name: "Er. Balavantsinh L. Rajput",
      role: "Executive Director",
      subject: "Physics Mentor",
      img: "https://kishorinstitute.com/wp-content/uploads/elementor/thumbs/MAX09000-scaled-rbe2o34oyfxmeiy32tmf5mefeg8pom30cq9ij9fxx8.jpg",
      index: "02",
    },
    {
      name: "Dr. Ajay L. Rajput",
      role: "Managing Director",
      subject: "Biology Mentor",
      img: "https://kishorinstitute.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-10-14-at-11.55.01-AM-rd6m2xnebioq7t1klejjw52ohhai8te36dzg3hcwvw.jpeg",
      index: "03",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1a1a18] antialiased selection:bg-[#fde8df] selection:text-[#D94B1F] scroll-smooth">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&display=swap');
        html, body {
          font-family: 'Geist', sans-serif !important;
        }
      `}</style>

      {/* SCROLL PROGRESS LINE */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#D94B1F] z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 px-5 md:px-12 flex items-center justify-between bg-white/92 backdrop-blur-md border-b transition-colors duration-300 ${scrolled ? 'border-[#e8e5e0]' : 'border-transparent'}`}>
        <a href="#" className="flex items-center gap-2.5">
          <img src="/kishor_logo.png" alt="Kishor Institute" className="h-14 w-auto object-contain" />
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="#courses" className="text-[15px] text-[#888580] hover:text-[#1a1a18] transition-colors duration-200">Courses</a></li>
          <li><a href="#leadership" className="text-[15px] text-[#888580] hover:text-[#1a1a18] transition-colors duration-200">Leadership</a></li>
          <li><a href="#branches" className="text-[15px] text-[#888580] hover:text-[#1a1a18] transition-colors duration-200">Branches</a></li>
          <li><a href="#why" className="text-[15px] text-[#888580] hover:text-[#1a1a18] transition-colors duration-200">About</a></li>
          <li><a href="#contact" className="text-[15px] text-[#888580] hover:text-[#1a1a18] transition-colors duration-200">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="tel:+919727276002" className="text-[13px] font-medium text-[#1a1a18] px-4 py-1.5 border border-[#e8e5e0] rounded-md hover:border-[#D94B1F] transition-colors duration-200">
            +91 97272 76002
          </a>
          <a href="#contact" className="text-[13px] font-medium text-white px-4 py-1.5 bg-[#D94B1F] rounded-md hover:opacity-80 transition-opacity duration-200">
            Enrol Now
          </a>
        </div>
      </nav>

      {/* HERO CONTAINER */}
      <div className="pt-16 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* HERO LEFT */}
        <div className="p-5 md:p-12 lg:p-20 flex flex-col justify-center border-r border-[#e8e5e0]">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.1em] uppercase text-[#D94B1F] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D94B1F] animate-pulse" />
            Admissions Open · 2026–27
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#1a1a18] mb-6">
            Gandhinagar's <br />
            most trusted <br />
            <span className="text-[#D94B1F] font-normal">coaching class.</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-[#888580] max-w-[440px] mb-10 font-light">
            Expert tuition for Class 5–12 (CBSE & GSEB) and competitive exam prep for IIT JEE, NEET, and GUJCET. English and Gujarati medium.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <a href="#contact" className="text-[14px] font-medium text-white px-6 py-3 bg-[#D94B1F] rounded-lg hover:opacity-85 transition-opacity duration-200">
              Enrol Now
            </a>
            <a href="#courses" className="text-[14px] text-[#888580] px-6 py-3 hover:text-[#1a1a18] transition-colors duration-200 flex items-center gap-1">
              View Courses →
            </a>
          </div>
        </div>

        {/* HERO RIGHT */}
        <div className="bg-[#f8f7f5] flex flex-col relative overflow-hidden min-h-[50vh] lg:min-h-0">
          <div className="flex-1 relative w-full h-full">
            <img
              src="/kishor_classes.png"
              alt="Kishor Classes Building"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-[#e8e5e0] bg-white z-10">
            {stats.map((s, i) => (
              <div className="p-5 md:p-6 border-r border-[#e8e5e0] last:border-r-0 flex flex-col gap-0.5" key={i}>
                <span className="text-xl md:text-2xl font-semibold tracking-tight text-[#D94B1F]">{s.n}</span>
                <span className="text-[11px] md:text-[12px] text-[#888580] font-normal leading-tight">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COURSES */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-white border-t border-[#e8e5e0]" id="courses">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#888580] mb-3">Courses Offered</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1a1a18]">Every board, every grade.</h2>
          </div>
          <p className="text-[14px] text-[#888580] max-w-[240px] sm:text-right leading-relaxed font-light">
            Both English and Gujarati medium across all classes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#e8e5e0] rounded-xl overflow-hidden">
          {courses.map((c, i) => (
            <div className="p-8 border-r border-b border-[#e8e5e0] last:border-b-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:last:border-b-0 lg:[&:nth-last-child(2)]:border-b-0 lg:[&:nth-last-child(3)]:border-b-0 hover:bg-[#fff5f2] transition-colors duration-200" key={i}>
              <span className="inline-block text-[10px] font-medium tracking-wider uppercase text-[#D94B1F] bg-[#fde8df] px-2 py-0.5 rounded mb-4">
                {c.tag}
              </span>
              <div className="text-lg font-medium text-[#1a1a18] mb-1">{c.grade}</div>
              <div className="text-[13px] text-[#888580] font-light">{c.board}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-white border-t border-[#e8e5e0]" id="leadership">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#888580] mb-3">Our Leadership</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1a1a18]">The minds behind the mission.</h2>
          </div>
          <p className="text-[14px] text-[#888580] max-w-[260px] sm:text-right leading-relaxed font-light">
            Three decades of academic leadership, one shared vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border border-[#e8e5e0] rounded-xl overflow-hidden">
          {leaders.map((l, i) => (
            <div
              key={i}
              className="group relative flex flex-col border-r border-b border-[#e8e5e0] last:border-b-0 lg:border-b-0 lg:[&:nth-child(3n)]:border-r-0 hover:bg-[#fff5f2] transition-colors duration-300"
            >
              <div className="relative overflow-hidden bg-[#f8f7f5] aspect-[4/3]">
                <img
                  src={l.img}
                  alt={l.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 text-[11px] font-medium text-[#D94B1F] bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded tracking-widest">
                  {l.index}
                </div>
              </div>
              <div className="p-6 flex flex-col gap-1 flex-1">
                <div className="text-[10px] font-medium tracking-wider uppercase text-[#D94B1F] bg-[#fde8df] px-2 py-0.5 rounded self-start mb-2">
                  {l.subject}
                </div>
                <div className="text-[16px] font-medium text-[#1a1a18] leading-snug">{l.name}</div>
                <div className="text-[13px] text-[#888580] font-light">{l.role}</div>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#D94B1F] w-0 group-hover:w-full transition-all duration-300 ease-out" />
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-[#f8f7f5] border-t border-[#e8e5e0] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20" id="why">
        <div className="lg:sticky lg:top-24 h-fit">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#888580] mb-3">Why Kishor</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1a1a18]">Built on results.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {[
            ["01", "Expert Faculty", "Qualified teachers with 10+ years of experience and proven track records."],
            ["02", "Regular Mock Tests", "Exam-pattern tests to build confidence and improve accuracy."],
            ["03", "Doubt Sessions", "Dedicated clearing sessions after every lecture."],
            ["04", "Study Materials", "Comprehensive notes, practice sheets, and revision guides included."],
            ["05", "Mobile App", "Access recorded lectures and tests on Android & iOS anytime."],
            ["06", "3 Branches", "Conveniently located across Gandhinagar."],
          ].map(([n, t, d]) => (
            <div key={n} className="flex flex-col">
              <div className="text-[12px] font-medium text-[#D94B1F] mb-2">{n}</div>
              <div className="text-[14px] font-medium text-[#1a1a18] mb-1.5">{t}</div>
              <div className="text-[13px] text-[#888580] leading-relaxed font-light">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BRANCHES — imported component */}
      <BranchesSection />

      {/* CONTACT */}
      <section className="py-16 md:py-24 px-5 md:px-12 border-t border-[#e8e5e0] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20" id="contact">
        <div>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#888580] mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1a1a18] mb-4">Start your journey today.</h2>
          <p className="text-[14px] text-[#888580] leading-relaxed font-light max-w-[340px] mb-10">
            We'll get back to you within 24 hours to help you find the right course.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[14px] text-[#1a1a18]">
              <svg className="w-4 h-4 text-[#D94B1F] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 8.81 19.79 19.79 0 01.06 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +91 97272 76002
            </div>
            <div className="flex items-center gap-3 text-[14px] text-[#1a1a18]">
              <svg className="w-4 h-4 text-[#D94B1F] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              kishorinstitute.sales@gmail.com
            </div>
            <div className="flex items-center gap-3 text-[14px] text-[#1a1a18]">
              <svg className="w-4 h-4 text-[#D94B1F] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Gandhinagar, Gujarat
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="flex flex-col gap-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5 w-full">
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#888580]">Name</span>
              <input type="text" placeholder="Student's full name" className="px-3.5 py-2.5 border border-[#e8e5e0] rounded-lg bg-white text-[#1a1a18] text-[14px] font-light outline-none focus:border-[#D94B1F] transition-colors duration-200 w-full" />
            </label>
            <label className="flex flex-col gap-1.5 w-full">
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#888580]">Phone</span>
              <input type="tel" placeholder="+91 XXXXX XXXXX" className="px-3.5 py-2.5 border border-[#e8e5e0] rounded-lg bg-white text-[#1a1a18] text-[14px] font-light outline-none focus:border-[#D94B1F] transition-colors duration-200 w-full" />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5 w-full">
  <span className="text-[11px] font-medium tracking-wider uppercase text-[#888580]">Class</span>
  <select className="px-3.5 py-2.5 border border-[#e8e5e0] rounded-lg bg-white text-[#1a1a18] text-[14px] font-light outline-none focus:border-[#D94B1F] transition-colors duration-200 w-full appearance-none">
    <option value="">Select class</option>
    {["5","6","7","8","9","10","11 Science","11 Commerce","12 Science","12 Commerce","IIT JEE","NEET","GUJCET – Maths Stream","GUJCET – Biology Stream"].map(c => (
      <option key={c}>Class {c}</option>
    ))}
  </select>
</label>
            <label className="flex flex-col gap-1.5 w-full">
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#888580]">Board</span>
              <select className="px-3.5 py-2.5 border border-[#e8e5e0] rounded-lg bg-white text-[#1a1a18] text-[14px] font-light outline-none focus:border-[#D94B1F] transition-colors duration-200 w-full appearance-none">
                <option value="">Select board</option>
                <option>CBSE</option>
                <option>GSEB</option>
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-1.5 w-full">
            <span className="text-[11px] font-medium tracking-wider uppercase text-[#888580]">Message</span>
            <textarea placeholder="Any queries or requirements?" className="px-3.5 py-2.5 border border-[#e8e5e0] rounded-lg bg-white text-[#1a1a18] text-[14px] font-light outline-none focus:border-[#D94B1F] transition-colors duration-200 w-full min-h-[90px] resize-y" />
          </label>

          <button className="self-start text-[14px] font-medium text-white px-7 py-3 bg-[#D94B1F] rounded-lg cursor-pointer hover:opacity-75 transition-opacity duration-200">
            Send Enquiry
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e8e5e0] py-8 px-5 md:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <img src="/kishor_logo.png" alt="Kishor Institute" className="h-8 w-auto object-contain" />
        <span className="text-[12px] text-[#888580]">© 2026 · Gandhinagar, Gujarat</span>
      </footer>
    </div>
  );
}