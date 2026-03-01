import { Variants } from "framer-motion";

export const fadeUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { opacity: 0, y: 20 }
};

export const containerReveal: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const itemReveal: Variants = {
    initial: { opacity: 0, scale: 0.95, y: 15 },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    },
};

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

export const hoverScale: Variants = {
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
};

export const glassHover: Variants = {
    initial: { backgroundColor: "rgba(255, 255, 255, 0.03)" },
    hover: {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        transition: { duration: 0.3 }
    },
};
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3, ease: "easeInOut" }
    }
};
