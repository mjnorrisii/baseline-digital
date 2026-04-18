import { Link } from "react-router-dom";
import { ArrowRight, Mail, Globe, Linkedin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#020508" }}>
      {/* Grid background */}
      <div className="absolute inset-0 surface-grid opacity-25" />
      <div className="glow-line absolute top-0 inset-x-0" />

      {/* Pre-footer CTA banner */}
      <div className="relative z-10 border-b border-white/5">
        <div className="container py-20">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,229,255,0.06) 0%, rgba(99,102,241,0.06) 100%)",
              border: "1px solid rgba(0,229,255,0.12)"
            }}>
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.15), transparent 70%)" }} />
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(0,229,255,0.5), transparent)" }} />

            <div className="relative z-10">
              <p className="section-label mb-6 inline-flex">Ready to stop leaking revenue?</p>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-6 mt-4 leading-tight">
                Your competitors are<br />
                <span className="text-[#00e5ff]" style={{ textShadow: "0 0 40px rgba(0,229,255,0.3)" }}>
                  already automating.
                </span>
              </h2>
              <p className="text-base text-white/45 max-w-lg mx-auto mb-10">
                Book a free strategy call. We'll identify your most costly operational bottlenecks in 30 minutes.
              </p>
              <Link
                to="/book"
                id="footer-cta-btn"
                className="btn-premium group inline-flex items-center gap-2 rounded-full px-10 py-5 text-base font-bold text-[#030609]"
              >
                Book Strategy Call — Free
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="relative z-10 container py-20">
        <div className="grid gap-12 lg:grid-cols-5 md:grid-cols-2">

          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="group inline-flex mb-6">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              Infrastructure-grade automation for high-volume service businesses. We build the systems that run your business.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/mjnorrisii", label: "LinkedIn" },
                { icon: Mail, href: "mailto:contact@baselinedigital.dk", label: "Email" },
                { icon: Globe, href: "#", label: "Website" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="h-9 w-9 rounded-full flex items-center justify-center text-white/30 hover:text-[#00e5ff] transition-all border border-white/8 hover:border-[#00e5ff]/30 hover:bg-[#00e5ff]/5"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00e5ff] mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "How It Works", path: "/how-it-works" },
                { label: "Use Cases", path: "/use-cases" },
                { label: "Process", path: "/process" },
                { label: "Book Strategy Call", path: "/book" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/35 hover:text-white/80 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00e5ff] mb-6">Industries</h4>
            <ul className="space-y-3">
              {[
                { label: "Logistics Automation", path: "/logistics-automation" },
                { label: "Real Estate Operations", path: "/real-estate-operations" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/35 hover:text-white/80 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00e5ff] mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@baselinedigital.dk"
                  className="text-sm text-white/35 hover:text-white/70 transition-colors flex items-center gap-2 group"
                >
                  <div className="h-7 w-7 rounded-lg flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#00e5ff]/10"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <Mail size={13} />
                  </div>
                  contact@baselinedigital.dk
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/35">
                <div className="h-7 w-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <Globe size={13} />
                </div>
                Operating globally
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Baseline Digital. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/20 font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
