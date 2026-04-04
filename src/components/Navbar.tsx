import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`glass-nav transition-all duration-300 ${scrolled ? "py-2 border-b/100" : "py-4 border-b/0"
      }`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Baseline Digital Logo"
            className="h-24 w-auto transition-all duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative py-1 text-sm font-medium transition-colors hover:text-foreground ${location.pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground"
                }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/book"
            className="btn-premium group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Book a Call
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden p-2 rounded-lg bg-secondary/50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background/95 backdrop-blur-xl px-6 py-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium transition-colors ${location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setMobileOpen(false)}
                className="btn-premium mt-2 block rounded-xl px-4 py-3 text-center text-sm font-bold text-primary-foreground"
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
