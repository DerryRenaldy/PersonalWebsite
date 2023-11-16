import Image from "@assets/images";
import clsx from "clsx";
import { useResponsive } from "components/hooks/useResponsive";
import Matter from "matter-js";
import { useRef, useEffect } from "react";

export const MatterJS = () => {
  const { screenType } = useResponsive();
  const matterRef = useRef<HTMLCanvasElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  const THICCNESS = 60;
  let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

  let leftWall: Matter.Body;
  let rightWall: Matter.Body;
  let topWall: Matter.Body;
  let ground: Matter.Body;
  let middleBox: Matter.Body;
  let render: Matter.Render;
  let mouseConstraint: Matter.MouseConstraint;

  const setWalls = () => {
    leftWall = Bodies.rectangle(
      0 - THICCNESS / 2,
      matterRef.current.clientHeight / 2,
      THICCNESS,
      matterRef.current.clientHeight * 5,
      { isStatic: true }
    );

    rightWall = Bodies.rectangle(
      matterRef.current.clientWidth + THICCNESS / 2,
      matterRef.current.clientHeight / 2,
      THICCNESS,
      matterRef.current.clientHeight * 5,
      { isStatic: true }
    );

    topWall = Bodies.rectangle(
      matterRef.current.clientWidth / 2,
      0 - THICCNESS / 2,
      2000,
      THICCNESS,
      { isStatic: true }
    );

    ground = Bodies.rectangle(
      matterRef.current.clientWidth / 2,
      matterRef.current.clientHeight + THICCNESS / 2,
      20000,
      THICCNESS,
      { isStatic: true }
    );
  };

  useEffect(() => {
    if (!matterRef.current && !containerRef.current) {
      return;
    }

    // create an engine
    let engine = Engine.create({ gravity: { y: 0.05, x: 0 } });

    // create a renderer
    render = Render.create({
      engine: engine,
      canvas: matterRef.current,
      options: {
        background: "transparent",
        wireframes: false,
        // width: 388,
        width: window.innerWidth / 1.1,
        height: screenType === "MOBILE" ? 450 : 476,
        showAngleIndicator: false,
      },
    });

    let mouse = Mouse.create(render.canvas);
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    setWalls();

    // SET CONTENT
    let react = Bodies.circle(
      matterRef.current.clientWidth / 2,
      0,
      screenType === "MOBILE" ? 45 : 50,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.reactLogo,
            xScale: screenType === "MOBILE" ? 0.5 : 0.6,
            yScale: screenType === "MOBILE" ? 0.5 : 0.6,
          },
        },
      }
    );

    let docker = Bodies.circle(
      matterRef.current.clientWidth / 3,
      0,
      screenType === "MOBILE" ? 45 : 80,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.dockerLogo,
            xScale: screenType === "MOBILE" ? 0.25 : 0.4,
            yScale: screenType === "MOBILE" ? 0.25 : 0.4,
          },
        },
      }
    );

    let golang = Bodies.rectangle(
      matterRef.current.clientWidth / 1.2,
      10,
      screenType === "MOBILE" ? 50 : 80,
      screenType === "MOBILE" ? 100 : 180,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.golangLogo,
            xScale: screenType === "MOBILE" ? 0.25 : 0.4,
            yScale: screenType === "MOBILE" ? 0.25 : 0.4,
          },
        },
      }
    );

    let js = Bodies.rectangle(
      matterRef.current.clientWidth / 3.5,
      20,
      screenType === "MOBILE" ? 50 : 90,
      screenType === "MOBILE" ? 50 : 90,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.jsLogo,
            xScale: screenType === "MOBILE" ? 0.25 : 0.4,
            yScale: screenType === "MOBILE" ? 0.25 : 0.4,
          },
        },
      }
    );

    let ts = Bodies.rectangle(
      matterRef.current.clientWidth / 3.1,
      100,
      screenType === "MOBILE" ? 50 : 90,
      screenType === "MOBILE" ? 50 : 90,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.tsLogo,
            xScale: screenType === "MOBILE" ? 0.25 : 0.4,
            yScale: screenType === "MOBILE" ? 0.25 : 0.4,
          },
        },
      }
    );

    let motion = Bodies.circle(
      matterRef.current.clientWidth / 3.2,
      50,
      screenType === "MOBILE" ? 40 : 60,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.motionLogo,
            xScale: screenType === "MOBILE" ? 0.25 : 0.4,
            yScale: screenType === "MOBILE" ? 0.25 : 0.4,
          },
        },
      }
    );

    let mysql = Bodies.rectangle(
      matterRef.current.clientWidth / 2.4,
      300,
      screenType === "MOBILE" ? 80 : 160,
      screenType === "MOBILE" ? 60 : 120,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.mysqlLogo,
            xScale: screenType === "MOBILE" ? 0.25 : 0.5,
            yScale: screenType === "MOBILE" ? 0.25 : 0.5,
          },
        },
      }
    );

    let redis = Bodies.rectangle(
      matterRef.current.clientWidth / 1.5,
      0,
      screenType === "MOBILE" ? 160 : 200,
      screenType === "MOBILE" ? 60 : 80,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.redisLogo,
            xScale: screenType === "MOBILE" ? 0.25 : 0.3,
            yScale: screenType === "MOBILE" ? 0.25 : 0.3,
          },
        },
      }
    );

    let tailwind = Bodies.rectangle(
      matterRef.current.clientWidth / 1.2,
      0,
      screenType === "MOBILE" ? 200 : 280,
      screenType === "MOBILE" ? 55 : 70,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.tailwindLogo,
            xScale: screenType === "MOBILE" ? 0.25 : 0.35,
            yScale: screenType === "MOBILE" ? 0.25 : 0.35,
          },
        },
      }
    );

    let unity = Bodies.rectangle(
      matterRef.current.clientWidth / 6,
      0,
      screenType === "MOBILE" ? 140 : 180,
      screenType === "MOBILE" ? 30 : 65,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.unityLogo,
            xScale: screenType === "MOBILE" ? 0.25 : 0.35,
            yScale: screenType === "MOBILE" ? 0.25 : 0.35,
          },
        },
      }
    );

    let cornerBox = Bodies.rectangle(
      0,
      matterRef.current.clientHeight,
      350,
      200,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }
    );

    if (!(screenType === "MOBILE")) {
      // middleBox = Bodies.rectangle(
      //   matterRef.current.clientWidth / 2,
      //   matterRef.current.clientHeight / 2,
      //   280,
      //   80,
      //   {
      //     isStatic: true,
      //     render: {
      //       fillStyle: "transparent",
      //     },
      //   }
      // );
      // Composite.add(engine.world, middleBox);

      const colors = [
        "#F8F8FF",
        "#CAC9CD",
        "#9B9A9C",
        "#6D6A6A",
        "#3E3B39",
        "#100C07",
      ];

      // const colors2 = [
      //   "#8FD1D5",
      //   "#42B3C8",
      //   "#B0362C",
      //   "#278DBF",
      //   "#D6D077",
      //   "#C28E1B",
      //   "#545552",
      //   "#726CA9",
      //   "#6D8AB7",
      //   "#E1E1E1",
      // ];

      const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      };

      for (let i = 0; i < 400; i++) {
        let circle = Bodies.circle(
          Math.random() * (matterRef.current.clientWidth - 10) + 10,
          i,
          16,
          {
            render: {
              fillStyle: getRandomColor(),
              opacity: 0.4,
            },
          }
        );
        Composite.add(engine.world, circle);
      }
    }

    // add all of the bodies to the world
    Composite.add(engine.world, [
      react,
      docker,
      golang,
      js,
      ts,
      mysql,
      motion,
      redis,
      tailwind,
      unity,
      cornerBox,
      ground,
      leftWall,
      rightWall,
      topWall,
      mouseConstraint,
    ]);

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    // Cleanup function
    return () => {
      Render.stop(render);
      Runner.stop(runner);
    };
  }, [screenType === "MOBILE"]);

  useEffect(() => {
    const handleResize = () => {
      render.canvas.width = window.innerWidth / 1.1;
      render.canvas.height = screenType === "MOBILE" ? 450 : 476;

      Matter.Body.setPosition(
        ground,
        Matter.Vector.create(
          matterRef.current.clientWidth / 2,
          matterRef.current.clientHeight + THICCNESS / 2
        )
      );

      Matter.Body.setPosition(
        leftWall,
        Matter.Vector.create(
          0 - THICCNESS / 2,
          matterRef.current.clientHeight / 2
        )
      );
      Matter.Body.setPosition(
        rightWall,
        Matter.Vector.create(
          matterRef.current.clientWidth + THICCNESS / 2,
          matterRef.current.clientHeight / 2
        )
      );
      Matter.Body.setPosition(
        middleBox,
        Matter.Vector.create(
          matterRef.current.clientWidth / 2,
          matterRef.current.clientHeight / 2
        )
      );
    };

    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      // @ts-ignore
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      // @ts-ignore
      mouseConstraint.mouse.mousewheel
    );

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenType === "MOBILE"]);

  return (
    <div ref={containerRef}>
      <div className={clsx("flex justify-center p-4 items-center relative")}>
        <div
          className={clsx(
            "relative flex flex-col items-center justify-center gap-x-10",
            "md:flex-row",
            "flex-col"
          )}
        >
          {/* BACKGROUND */}
          <div
            className="absolute hidden overflow-hidden select-none md:block w-[calc(100svw/1.1)]"
            style={{
              height: 476,
            }}
          >
            <img
              src={Image.background}
              className="w-[100svw] h-[100svh] absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%]"
            />
          </div>

          <div
            className={clsx(
              "relative flex border border-[#454444] rounded-xl",
              "w-[calc(100svw/1.1)]",
              screenType === "MOBILE" ? "h-[450px]" : " h-[476px]"
            )}
          >
            {/* TEXT */}
            <div className="absolute left-0 bottom-0 w-[150px] h-[100px] select-none p-4 justify-center flex flex-col z-[100]">
              <p className="text-white font-rubik font-bold text-lg">
                My Stack
              </p>
              <p className="text-white font-rubik text-md">Programming</p>
            </div>

            {/* CANVAS */}
            <canvas ref={matterRef} className="absolute top-0 rounded-xl" />
          </div>

          {/* TEXT EXPERTISE */}
          {/* <div
            className={`absolute text-white p-4 rounded-xl backdrop-blur-sm pointer-events-none font-semibold select-none font-rubik  ${
              screenType === "MOBILE" ? "text-[20px]" : "text-[40px] h-fit top-6"
            }`}
          >
            <p>Web Development</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MatterJS;
