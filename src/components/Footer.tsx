import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-brand-deep/50 py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="group flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-electric-indigo flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20">
                B
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-heading">
                Baseline<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
              Infrastructure-grade automation for high-volume service businesses. We build the systems that run your business.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: "Home", path: "/" },
                { label: "How It Works", path: "/how-it-works" },
                { label: "Use Cases", path: "/use-cases" },
                { label: "Process", path: "/process" },
                { label: "Book Strategy Call", path: "/book" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                    {item.label}
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@baselinedigital.dk" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={16} />
                  </div>
                  contact@baselinedigital.dk
                </a>
              </li>

              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Globe size={16} />
                </div>
                Operating globally
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-6 bg-primary/5 ring-1 ring-primary/20">
            <h4 className="font-heading text-sm font-bold text-heading mb-4">Start your audit</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Identify exactly where your operations are leaking revenue.
            </p>
            <Link
              to="/book"
              className="btn-premium flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Baseline Digital. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
