import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold text-heading">Baseline Digital</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Revenue and operations automation for established service businesses.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Navigation</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
              <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How It Works</Link>
              <Link to="/use-cases" className="text-sm text-muted-foreground hover:text-foreground">Use Cases</Link>
              <Link to="/process" className="text-sm text-muted-foreground hover:text-foreground">Process</Link>
              <Link to="/book" className="text-sm text-muted-foreground hover:text-foreground">Book a Call</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Contact</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Copenhagen, Denmark</p>
              <a href="mailto:contact@baselinedigital.dk" className="hover:text-foreground">
                contact@baselinedigital.dk
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Baseline Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
