import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://www.baselinedigital.dk";

// English route -> Danish counterpart. Must mirror the hreflang tags in the
// Danish static pages in public/, so each pair points at the other.
const DANISH: Record<string, string> = {
  "/how-it-works": "/saadan-virker-det",
  "/process": "/proces",
  "/book": "/book-en-gennemgang",
  "/portfolio": "/erfaring",
};

const HreflangLinks = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const da = DANISH[pathname];
    if (!da) return;
    const links = [
      { hreflang: "en", href: `${SITE}${pathname}` },
      { hreflang: "da", href: `${SITE}${da}` },
    ].map(({ hreflang, href }) => {
      const el = document.createElement("link");
      el.rel = "alternate";
      el.hreflang = hreflang;
      el.href = href;
      document.head.appendChild(el);
      return el;
    });
    return () => links.forEach((el) => el.remove());
  }, [pathname]);

  return null;
};

export default HreflangLinks;
