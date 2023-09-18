const hovered = {
  rest: {},
  hover: {},
};

const hoverButtonInactive = {
  rest: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
  hover: {
    y: -19,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

const hoverButtonActive = {
  rest: {
    opacity: 0,
    y: 12,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

const VariantsNavbar = {
  hovered,
  hoverButtonInactive,
  hoverButtonActive,
};

export default VariantsNavbar;
