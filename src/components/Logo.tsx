import React from 'react';

/**
 * Logo: transparent icon + HTML text.
 * Icon: 400x400 PNG/WebP with real alpha (no bg, glow preserved).
 * Text: rendered as real HTML so it's sharp, accessible, and sized via CSS.
 *
 * Sizing is controlled via the `size` prop (tailwind height class for the icon).
 * Default is h-10 (40px) which reads well in a navbar.
 */
type LogoProps = {
  /** Tailwind height class for the icon, e.g. "h-10", "h-14". */
  size?: string;
  /** Show the "Baseline Digital" wordmark next to the icon. */
  showText?: boolean;
  /** Extra classes for the wrapper. */
  className?: string;
};

const Logo = ({
  size = "h-10",
  showText = true,
  className = "",
}: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <picture>
        <source srcSet="/logo-icon.webp" type="image/webp" />
        <img
          src="/logo-icon.png"
          alt=""
          className={`${size} w-auto object-contain`}
          width={400}
          height={400}
          decoding="async"
          fetchPriority="high"
        />
      </picture>
      {showText && (
        <span className="font-heading font-bold text-base md:text-lg tracking-tight text-white whitespace-nowrap">
          Baseline <span className="text-[#00e5ff]">Digital</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
