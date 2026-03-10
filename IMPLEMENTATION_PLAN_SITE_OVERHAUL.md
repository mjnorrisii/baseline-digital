# Implementation Plan: Site Overhaul & Premium Visual Update

This plan outlines the steps to elevate the **Baseline Digital** website from a solid foundation to a premium, high-fidelity, and "state-of-the-art" digital experience. The focus is on visual excellence, interaction design, and trust-building.

## 🎨 Visual Direction
- **Theme**: Refine the dark mode specifically for high-end B2B.
- **Palette**: Enhance the Nord/Dark Blue palette with "Electric" gradients (Indigo-to-Cyan).
- **Glassmorphism**: Implement backdrop-blur surfaces for navigation and key cards.
- **Typography**: Optimize the use of 'Space Grotesk' for display and 'IBM Plex Sans' for readability.

## 🛠 Progress Checklist

### Phase 1: Global Styles & Design System Refinement
- [x] **Global CSS update**: Refine `index.css` with advanced utility classes (`.glass-morphism`, `.text-gradient-electric`, `.glow-border`).
- [x] **Enhanced Color Tokens**: Add vibrant secondary and accent colors in `tailwind.config.ts`.
- [x] **Micro-interaction Library**: Setup base Framer Motion variants for consistent reveals and hover effects.

### Phase 2: Structural Page Overhaul
- [x] **Premium Navbar**: Implement a sticky glassmorphism header with a "scrolled" state transition.
- [x] **Hero Section Enhancement**:
    - [x] Add dynamic text gradient to the main headline.
    - [x] Implement an "alive" background element (interactive or animated).
    - [x] Refine CTA button styling with subtle glow effects.
- [x] **"Ideal Fit" Section Polish**:
    - [x] Add subtle "Good Fit" (Positive/Green) vs "Not a Fit" (Muted) visual cues.
    - [x] Improve card hover transitions.
- [x] **Advanced Footer**: Create a "Mega Footer" with structured navigation and brand presence.

### Phase 3: New Premium Sections
- [x] **Integration Showcase**: Add a section with "muted-to-active" logos (Stripe, HubSpot, Slack, etc.).
- [x] **Trust & Results**: Implement a stylized "Wins" or Testimonial section.
- [x] **FAQ / Objection Handling**: Add an accordion-style FAQ section.
- [x] **Abstract Visuals**: Generate and integrate high-quality 3D/SVG assets to represent "workflow pipes" and "data nodes."

### Phase 4: Interaction & Polish
- [x] **Scroll Reveal Animations**: Add `framer-motion` `whileInView` triggers to all major sections and cards.
- [x] **Route Transitions**: Ensure smooth transitions between page navigations.
### Phase 5: Conversion & Trust Architecture
- [x] **Operational ROI Diagnostic**: Build an interactive leads/cost calculator component to demonstrate value.
- [x] **Industry-Specific Landing Pages**:
    - [x] Create specialized layouts for **Logistics Automation**.
    - [x] Create specialized layouts for **Real Estate Operations**.
- [x] **Founder Authority (E-E-A-T)**:
    - [x] Implement Michael Norris's founder profile with updated professional portrait.
    - [x] Strip image metadata for privacy.
    - [x] Inject `Person` and `Author` JSON-LD schema.

### Phase 6: Performance Edge
- [x] **Image Asset Optimization**: Convert all site images to WebP and implement lazy-loading.
- [x] **Script Budgeting**: Audit and optimize Cal.com and animation execution.
- [x] **Lighthouse Target**: Achieve 100/100 performance, accessibility, and SEO score.

---

## 📅 Context & Notes
*This plan is designed to be executed across multiple sessions. Each task should be verified for visual excellence before proceeding.*

> [!TIP]
> Use `framer-motion` for all non-trivial animations to maintain a "fluid" feel. Avoid jarring transitions.

> [!IMPORTANT]
> Maintain the core "Baseline Digital" brand identity—don't lose the professional/authoritative tone while adding visual flair.
