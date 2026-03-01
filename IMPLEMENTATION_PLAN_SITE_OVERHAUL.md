# Implementation Plan: Site Overhaul & Premium Visual Update

This plan outlines the steps to elevate the **Baseline Digital** website from a solid foundation to a premium, high-fidelity, and "state-of-the-art" digital experience. The focus is on visual excellence, interaction design, and trust-building.

## 🎨 Visual Direction
- **Theme**: Refine the dark mode specifically for high-end B2B.
- **Palette**: Enhance the Nord/Dark Blue palette with "Electric" gradients (Indigo-to-Cyan).
- **Glassmorphism**: Implement backdrop-blur surfaces for navigation and key cards.
- **Typography**: Optimize the use of 'Space Grotesk' for display and 'IBM Plex Sans' for readability.

## 🛠 Progress Checklist

### Phase 1: Global Styles & Design System Refinement
- [ ] **Global CSS update**: Refine `index.css` with advanced utility classes (`.glass-morphism`, `.text-gradient-electric`, `.glow-border`).
- [ ] **Enhanced Color Tokens**: Add vibrant secondary and accent colors in `tailwind.config.ts`.
- [ ] **Micro-interaction Library**: Setup base Framer Motion variants for consistent reveals and hover effects.

### Phase 2: Structural Page Overhaul
- [ ] **Premium Navbar**: Implement a sticky glassmorphism header with a "scrolled" state transition.
- [ ] **Hero Section Enhancement**:
    - [ ] Add dynamic text gradient to the main headline.
    - [ ] Implement an "alive" background element (interactive or animated).
    - [ ] Refine CTA button styling with subtle glow effects.
- [ ] **"Ideal Fit" Section Polish**:
    - [ ] Add subtle "Good Fit" (Positive/Green) vs "Not a Fit" (Muted) visual cues.
    - [ ] Improve card hover transitions.
- [ ] **Advanced Footer**: Create a "Mega Footer" with structured navigation and brand presence.

### Phase 3: New Premium Sections
- [ ] **Integration Showcase**: Add a section with "muted-to-active" logos (Stripe, HubSpot, Slack, etc.).
- [ ] **Trust & Results**: Implement a stylized "Wins" or Testimonial section.
- [ ] **FAQ / Objection Handling**: Add an accordion-style FAQ section.
- [ ] **Abstract Visuals**: Generate and integrate high-quality 3D/SVG assets to represent "workflow pipes" and "data nodes."

### Phase 4: Interaction & Polish
- [ ] **Scroll Reveal Animations**: Add `framer-motion` `whileInView` triggers to all major sections and cards.
- [ ] **Route Transitions**: Ensure smooth transitions between page navigations.
- [ ] **Performance & SEO Audit**: Final check for speed and semantic HTML structure.

---

## 📅 Context & Notes
*This plan is designed to be executed across multiple sessions. Each task should be verified for visual excellence before proceeding.*

> [!TIP]
> Use `framer-motion` for all non-trivial animations to maintain a "fluid" feel. Avoid jarring transitions.

> [!IMPORTANT]
> Maintain the core "Baseline Digital" brand identity—don't lose the professional/authoritative tone while adding visual flair.
