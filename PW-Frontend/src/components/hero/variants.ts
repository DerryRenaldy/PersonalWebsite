const hovered = {
  rest: {
    y: 0,
  },
  hover: {
    y: 0,
  },
};

const child1 = {
  rest: {
    y: 0,
    transition: {
      type: "spring",
      stiffness:300,
      damping:25,
      mass:1,
      delay: 0.35,
    },
  },
  hover: {
    y: -240,
    transition: {
      delay: 0.25,
    },
  },
};

const child2 = {
  rest: {
    y: 0,
    transition: {
      type: "spring",
      stiffness:300,
      damping:25,
      mass:1,
      delay: 0.35,
    },
  },
  hover: {
    y: 240,
    transition: {
      delay: 0.25,
    },
  },
};

const child3 = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

const child4 = {
  rest: {
    opacity: 1,
    transition: {
      delay: 0.45,
    },
  },
  hover: {
    opacity: 0,
    transition: {
      duration:0.2
    }
  },
};

const child5 = {
  rest: {
    opacity: 1,
    transition: {
      delay: 0.45,
    },
  },
  hover: {
    opacity: 0,
  },
};

const VariantsHero = {
  hovered,
  child1,
  child2,
  child3,
  child4,
  child5,
};

export default VariantsHero;
