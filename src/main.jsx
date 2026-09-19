import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, ArrowDownRight, Menu, X, Github, Linkedin, Mail,
  MapPin, Phone, ExternalLink, Code2, ShoppingBag, Monitor, Send,
  CheckCircle2, Moon, Sun
} from "lucide-react";
import "./style.css";

const projects = [
  {
    id: "01",
    category: "EDUCATION / WEB",
    title: "LearnHub",
    desc: "A clean learning platform built around course discovery, student-focused navigation and responsive layouts.",
    image: "/assets/learnhub.png",
    url: "https://learn-hub-frontend-ivory.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "02",
    category: "COMMERCE / WEB",
    title: "E-commerce",
    desc: "A modern storefront concept focused on product presentation, visual hierarchy and a smooth browsing experience.",
    image: "/assets/ecommerce.png",
    url: "http://e-commerce-lovat-nine-30.vercel.app",
    tags: ["React", "JavaScript", "CSS"]
  }
];

const services = [
  { n: "01", icon: Code2, title: "Web Development", text: "Responsive, modern websites built with clean code and practical user experiences." },
  { n: "02", icon: ShoppingBag, title: "E-commerce", text: "Product-focused storefronts designed for clear browsing, strong presentation and usability." },
  { n: "03", icon: Monitor, title: "Frontend Development", text: "Polished interfaces that translate ideas and designs into responsive web experiences." }
];

function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("portfolio-theme") !== "light");

  useEffect(() => {
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      document.querySelector(".site-header")?.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent("New portfolio inquiry");
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\nProject:\n${f.get("message")}`
    );
    window.location.href = `mailto:mshayanarain5@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className={`site ${dark ? "dark" : "light"}`}>
      <header className="site-header">
        <nav className="nav shell">
          <button className="brand" onClick={() => go("home")}>M.SHAYAN<span>®</span></button>

          <div className={`nav-links ${open ? "show" : ""}`}>
            <button onClick={() => go("about")}>About</button>
            <button onClick={() => go("services")}>Services</button>
            <button onClick={() => go("work")}>Work</button>
            <button onClick={() => go("contact")}>Contact</button>
          </div>

          <button className="nav-cta" onClick={() => go("contact")}>
            Let's work <ArrowUpRight size={16}/>
          </button>
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            title={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            {dark ? <Sun size={16}/> : <Moon size={16}/>}<span>{dark ? "LIGHT" : "DARK"}</span>
          </button>
          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X/> : <Menu/>}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg"></div>
          <div className="shell hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span className="dot"></span> INDEPENDENT WEB DEVELOPER</div>
              <h1>Websites that<br/><em>mean business.</em></h1>
              <p className="lead">
                I’m M. Shayan, a web developer focused on modern websites,
                e-commerce experiences and frontend development.
              </p>
              <div className="hero-actions">
                <button className="black-btn" onClick={() => go("work")}>See my work <ArrowUpRight size={17}/></button>
                <button className="line-btn" onClick={() => go("contact")}>Start a conversation</button>
              </div>
              <div className="hero-bottom">
                <span>HYDERABAD, PAKISTAN</span>
                <span className="rule"></span>
                <span>AVAILABLE FOR FREELANCE</span>
              </div>
            </div>

            <div className="hero-portrait">
              <div className="portrait-wrap">
                <img src="/assets/profile.png" alt="M. Shayan" />
                <div className="portrait-label">
                  <small>PROFILE / 2026</small>
                  <strong>M. SHAYAN</strong>
                  <span>WEB DEVELOPER</span>
                </div>
              </div>
              <div className="vertical-text">BUILD / CREATE / SHIP</div>
            </div>
          </div>

          <button className="hero-scroll" onClick={() => go("about")}><span>SCROLL</span><ArrowDownRight size={17}/></button>
        </section>

        <section id="about" className="section about">
          <div className="shell">
            <div className="section-label"><span>01</span><b>ABOUT</b></div>
            <div className="about-grid">
              <div>
                <p className="big-statement">I build digital experiences with <span>clarity, purpose and detail.</span></p>
              </div>
              <div className="body-copy">
                <p>
                  I’m a fresher Web Developer from Hyderabad, Pakistan, building my skills through
                  hands-on projects in web development, e-commerce and frontend development.
                </p>
                <p>
                  My approach is simple: understand the goal, keep the interface clear, make it responsive,
                  and turn the idea into something people can actually use.
                </p>
                <div className="facts">
                  <div><strong>02+</strong><span>PROJECTS</span></div>
                  <div><strong>03</strong><span>CORE SERVICES</span></div>
                  <div><strong>24/7</strong><span>LEARNING MINDSET</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="shell">
            <div className="section-label"><span>02</span><b>SERVICES</b></div>
            <div className="services-head">
              <h2>What I <em>do.</em></h2>
              <p>Focused services for businesses, personal brands and digital projects.</p>
            </div>
            <div className="service-table">
              {services.map(({n, icon: Icon, title, text}) => (
                <article className="service" key={n}>
                  <span className="service-no">{n}</span>
                  <div className="service-icon"><Icon size={21}/></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ArrowUpRight className="service-arrow" size={20}/>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section work">
          <div className="shell">
            <div className="section-label"><span>03</span><b>SELECTED WORK</b></div>
            <div className="work-head">
              <h2>Selected <em>work.</em></h2>
              <p>Two projects from my development journey. More work is in progress.</p>
            </div>

            <div className="project-list">
              {projects.map((p) => (
                <article className="project" key={p.id}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="project-image">
                    <img src={p.image} alt={`${p.title} project preview`} />
                    <span className="project-badge">{p.id}</span>
                    <span className="project-open">VIEW LIVE <ExternalLink size={15}/></span>
                  </a>
                  <div className="project-info">
                    <div className="project-meta"><span>{p.category}</span><span>2026</span></div>
                    <div className="project-title">
                      <h3>{p.title}</h3>
                      <a href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                        <ArrowUpRight size={22}/>
                      </a>
                    </div>
                    <p>{p.desc}</p>
                    <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>

            <div className="github-row">
              <div><span>MORE CODE</span><strong>See what I’m building on GitHub.</strong></div>
              <a href="https://github.com/shayan001-web" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={17}/></a>
            </div>
          </div>
        </section>

        <section className="marquee"><div>DESIGN • DEVELOP • DELIVER • DESIGN • DEVELOP • DELIVER • </div></section>

        <section id="contact" className="section contact">
          <div className="shell">
            <div className="section-label"><span>04</span><b>CONTACT</b></div>
            <div className="contact-grid">
              <div className="contact-left">
                <h2>Have an idea?<br/><em>Let’s build it.</em></h2>
                <p>Tell me what you’re working on. I’ll get back to you through email.</p>
                <div className="contact-list">
                  <a href="mailto:mshayanarain5@gmail.com"><Mail size={17}/>mshayanarain5@gmail.com</a>
                  <a href="tel:+923472681458"><Phone size={17}/>0347 2681458</a>
                  <span><MapPin size={17}/>Hyderabad, Pakistan</span>
                </div>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/shayan-arain-037037438" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
                  <a href="https://github.com/shayan001-web" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
                </div>
              </div>

              <form className="contact-form" onSubmit={submit}>
                <label>YOUR NAME<input name="name" placeholder="Name" required/></label>
                <label>EMAIL ADDRESS<input name="email" type="email" placeholder="name@example.com" required/></label>
                <label>PROJECT DETAILS<textarea name="message" rows="5" placeholder="What would you like to build?" required></textarea></label>
                <button className="submit-btn" type="submit">{sent ? <><CheckCircle2 size={17}/> Opening email...</> : <>Send inquiry <Send size={16}/></>}</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <div className="brand">M.SHAYAN<span>®</span></div>
          <span>WEB DEVELOPER · E-COMMERCE · FREELANCE</span>
          <button onClick={() => go("home")}>BACK TO TOP <ArrowUpRight size={14}/></button>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
