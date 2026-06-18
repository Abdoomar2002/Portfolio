// Shared Framer Motion variants for consistent, premium reveal animations.

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fromLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Container that staggers its children.
export const stagger = (amount = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: amount, delayChildren },
  },
});

// Convenience props to drop onto a motion element for scroll reveal.
export const reveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-80px" },
};
