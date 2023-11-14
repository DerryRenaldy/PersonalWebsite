import Image from "@assets/images";
import clsx from "clsx";
import Matter from "matter-js";
import { useRef, useEffect } from "react";

export const MatterJSTest = () => {
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
      matterRef.current.clientWidth,
      THICCNESS,
      { isStatic: true }
    );

    ground = Bodies.rectangle(
      matterRef.current.clientWidth / 2,
      matterRef.current.clientHeight + THICCNESS / 2,
      matterRef.current.clientWidth,
      THICCNESS,
      { isStatic: true }
    );
  };

  useEffect(() => {
    // Check if matterRef is not null before creating the renderer
    if (!matterRef.current && !containerRef.current) {
      return;
    }

    // create an engine
    let engine = Engine.create({ gravity: { y: 0.05, x: 0 } });

    // create a renderer
    let render = Render.create({
      engine: engine,
      canvas: matterRef.current,
      options: {
        background: "transparent",
        wireframes: false,
        width: 388,
        height: 476,
        showAngleIndicator: false,
      },
    });

    let mouse = Mouse.create(render.canvas);
    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    setWalls();

    // create two boxes and a ground
    let react = Bodies.circle(0, 0, 45, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.8,
      render: {
        sprite: {
          texture: Image.reactLogo,
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });

    let docker = Bodies.circle(100, 0, 55, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.8,
      render: {
        sprite: {
          texture: Image.dockerLogo,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    });

    let golang = Bodies.circle(200, 10, 50, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.8,
      render: {
        sprite: {
          texture: Image.golangLogo,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    });

    let js = Bodies.rectangle(100, 20, 55, 55, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.8,
      render: {
        sprite: {
          texture: Image.jsLogo,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    });

    let ts = Bodies.rectangle(70, 100, 55, 55, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.8,
      render: {
        sprite: {
          texture: Image.tsLogo,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    });

    let motion = Bodies.circle(80, 50, 40, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.8,
      render: {
        sprite: {
          texture: Image.motionLogo,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    });

    let mysql = Bodies.circle(100, 300, 55, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.8,
      render: {
        sprite: {
          texture: Image.mysqlLogo,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    });

    let redis = Bodies.rectangle(90, 0, 150, 40, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.8,
      render: {
        sprite: {
          texture: Image.redisLogo,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    });

    let tailwind = Bodies.rectangle(170, 0, 200, 55, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.8,
      render: {
        sprite: {
          texture: Image.tailwindLogo,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    });

    let unity = Bodies.circle(0, 0, 55, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.8,
      render: {
        sprite: {
          texture: Image.unityLogo,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    });

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

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    const handleResize = () => {
      // render.canvas.width = window.innerWidth / 1.1;
      // render.canvas.height = window.innerHeight / 1.1;
      console.log("Resized");

      Matter.Body.setPosition(
        ground,
        Matter.Vector.create(
          matterRef.current.clientWidth / 2,
          matterRef.current.clientHeight + THICCNESS / 2
        )
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once after initial render
  return (
    <>
      <div
        ref={containerRef}
        className={clsx("flex justify-center items-center ", "md:py-[300px]")}
      >
        <div
          className={clsx(
            "p-4 flex flex-col items-center justify-center gap-x-10",
            "md:flex-row",
            "flex-col"
          )}
        >
          <div
            className={clsx(
              "relative flex border border-[#454444] rounded-xl h-[476px] overflow-hidden filter saturate-50",
              "md:w-[388px]",
              "w-[300px]"
            )}
          >
            {/* TEXT */}
            <div className="absolute left-0 bottom-0 w-[150px] h-[100px] p-4 justify-center flex flex-col z-[100]">
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
          <div className="text-white h-full p-6 font-rubik border">
            Web Development
          </div>
        </div>
      </div>
    </>
  );
};

export default MatterJSTest;
