import { animated, useSpring } from "@react-spring/web";
import "./AnimatedComponen.css";

const AnimatedComponent = () => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };

  return (
    <>
      <animated.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          borderRadius: 10,
          padding: 20,
          display: "flex",
          justifyContent: "center",
          ...springs,
        }}
      />
      <button
        className="text-white m-5 border rounded-full px-4 py-2"
        onClick={handleClick}
      >
        start animation
      </button>
    </>
  );
};

export default AnimatedComponent;
