export const pageVariants = {
  initial: {
    // x: "-100%",
    opacity: 0,
  },
  in: {
    // x: 0,
    opacity: 1,
  },
  out: {
    // x: "100%",
    opacity: 0,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3,
};
