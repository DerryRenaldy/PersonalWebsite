import Image from "@assets/images";
import clsx from "clsx";
import Matter from "matter-js";
import { useRef, useEffect, useState } from "react";

export const MatterJSTest = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
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

  // useEffect(() => {
  //   console.log("Is Mobile : " + isMobile);
  // }, [isMobile]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      console.log("Mobile");
      setIsMobile(true);
    } else {
      console.log("not Mobile");
      setIsMobile(false);
    }
  }, []);

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
        height: isMobile ? 450 : 476,
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
      isMobile ? 45 : 50,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.reactLogo,
            xScale: isMobile ? 0.5 : 0.6,
            yScale: isMobile ? 0.5 : 0.6,
          },
        },
      }
    );

    let docker = Bodies.circle(
      matterRef.current.clientWidth / 3,
      0,
      isMobile ? 45 : 80,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.dockerLogo,
            xScale: isMobile ? 0.25 : 0.4,
            yScale: isMobile ? 0.25 : 0.4,
          },
        },
      }
    );

    let golang = Bodies.rectangle(
      matterRef.current.clientWidth / 1.2,
      10,
      isMobile ? 50 : 80,
      isMobile ? 100 : 180,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.golangLogo,
            xScale: isMobile ? 0.25 : 0.4,
            yScale: isMobile ? 0.25 : 0.4,
          },
        },
      }
    );

    let js = Bodies.rectangle(
      matterRef.current.clientWidth / 3.5,
      20,
      isMobile ? 50 : 90,
      isMobile ? 50 : 90,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.jsLogo,
            xScale: isMobile ? 0.25 : 0.4,
            yScale: isMobile ? 0.25 : 0.4,
          },
        },
      }
    );

    let ts = Bodies.rectangle(
      matterRef.current.clientWidth / 3.1,
      100,
      isMobile ? 50 : 90,
      isMobile ? 50 : 90,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.tsLogo,
            xScale: isMobile ? 0.25 : 0.4,
            yScale: isMobile ? 0.25 : 0.4,
          },
        },
      }
    );

    let motion = Bodies.circle(
      matterRef.current.clientWidth / 3.2,
      50,
      isMobile ? 40 : 60,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.motionLogo,
            xScale: isMobile ? 0.25 : 0.4,
            yScale: isMobile ? 0.25 : 0.4,
          },
        },
      }
    );

    let mysql = Bodies.rectangle(
      matterRef.current.clientWidth / 2.4,
      300,
      isMobile ? 80 : 160,
      isMobile ? 60 : 120,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.mysqlLogo,
            xScale: isMobile ? 0.25 : 0.5,
            yScale: isMobile ? 0.25 : 0.5,
          },
        },
      }
    );

    let redis = Bodies.rectangle(
      matterRef.current.clientWidth / 1.5,
      0,
      isMobile ? 160 : 200,
      isMobile ? 60 : 80,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.redisLogo,
            xScale: isMobile ? 0.25 : 0.3,
            yScale: isMobile ? 0.25 : 0.3,
          },
        },
      }
    );

    let tailwind = Bodies.rectangle(
      matterRef.current.clientWidth / 1.2,
      0,
      isMobile ? 200 : 280,
      isMobile ? 55 : 70,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.tailwindLogo,
            xScale: isMobile ? 0.25 : 0.35,
            yScale: isMobile ? 0.25 : 0.35,
          },
        },
      }
    );

    let unity = Bodies.rectangle(
      matterRef.current.clientWidth / 6,
      0,
      isMobile ? 140 : 180,
      isMobile ? 30 : 65,
      {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          sprite: {
            texture: Image.unityLogo,
            xScale: isMobile ? 0.25 : 0.35,
            yScale: isMobile ? 0.25 : 0.35,
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

    if (!isMobile) {
      middleBox = Bodies.rectangle(
        matterRef.current.clientWidth / 2,
        matterRef.current.clientHeight / 2,
        280,
        80,
        {
          isStatic: true,
          render: {
            fillStyle: "transparent",
          },
        }
      );
      Composite.add(engine.world, middleBox);

      const colors = [
        "#F8F8FF",
        "#CAC9CD",
        "#9B9A9C",
        "#6D6A6A",
        "#3E3B39",
        "#100C07",
      ];

      const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      };

      for (let i = 0; i < 400; i++) {
        let circle = Bodies.circle(
          Math.random() * (matterRef.current.clientWidth - 10) + 10,
          i,
          12,
          {
            render: {
              fillStyle: getRandomColor(),
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
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }

      render.canvas.width = window.innerWidth / 1.1;
      render.canvas.height = isMobile ? 450 : 476;

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
  }, [isMobile]);

  return (
    <>
      <div
        ref={containerRef}
        className={clsx(
          "flex justify-center items-center",
          "md:py-[100px]",
          "pt-20"
        )}
      >
        <div
          className={clsx(
            "relative p-4 flex flex-col items-center justify-center gap-x-10",
            "md:flex-row",
            "flex-col"
          )}
        >
          <div
            className={clsx(
              "relative flex border border-[#454444] rounded-xl h-[476px] overflow-hidden",
              "w-[calc(100svw/1.1)]",
              isMobile ? "" : "filter"
            )}
          >
            {/* TEXT */}
            <div className="absolute left-0 bottom-0 w-[150px] h-[100px] select-none p-4 justify-center flex flex-col z-[100]">
              <p className="text-white font-rubik font-bold text-lg">
                My Stack
              </p>
              <p className="text-white font-rubik text-md">Programming</p>
            </div>

            {/* OVERLAY */}
            {/* <div className="absolute border h-full z-[100] mix-blend-multiply pointer-events-none opacity-20">
              <img src={Image.retro} className="bg-cover h-full" />
            </div> */}

            {/* CANVAS */}
            <canvas
              ref={matterRef}
              className="absolute top-0 rounded-xl left-1/2 -translate-x-[50%]"
            />
          </div>
          <div
            className={`absolute text-white p-4 pointer-events-none font-semibold select-none font-rubik  ${
              isMobile
                ? "bg-[#8d8d8d]/10 flex justify-center items-center rounded-xl backdrop-blur-sm text-[20px] top-4 bottom-4 left-4 right-4"
                : "text-[30px] h-fit"
            }`}
          >
            <p>Web Development</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatterJSTest;
