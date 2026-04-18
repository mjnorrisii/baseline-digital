import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navItems = [
  { label: "Home", path: "/" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Use Cases", path: "/use-cases" },
  { label: "Process", path: "/process" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`glass-nav transition-all duration-500 ${scrolled ? "py-3" : "py-4"}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <Logo className="h-9 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === item.path
                  ? "text-[#00e5ff] bg-[#00e5ff]/5"
                  : "text-white/50 hover:text-white/90 hover:bg-white/5"
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                  style={{ background: "#00e5ff", boxShadow: "0 0 8px #00e5ff" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/book"
            id="navbar-cta-btn"
            className="btn-premium group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-[#030609]"
          >
            Book a Call
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white/70 md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-[#030609]/98 backdrop-blur-2xl px-6 py-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? "text-[#00e5ff] bg-[#00e5ff]/10"
                      : "text-white/60 hover:text-white/90 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setMobileOpen(false)}
                className="btn-premium mt-3 block rounded-xl px-4 py-3.5 text-center text-sm font-bold text-[#030609]"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
