import Image from "@assets/images";
type initial = {
  x: number;
  y: number;
};

type Data = {
  imageUrl: string;
  alt: string;
  initial: initial;
  size: number;
};

export const MetaData: Data[] = [
  {
    imageUrl: Image.jsLogo,
    alt: "Javascript",
    size: 130,
    initial: {
      x: 490,
      y: 150,
    },
  },
  {
    imageUrl: Image.tsLogo,
    alt: "Typescript",
    size: 130,
    initial: {
      x: 250,
      y: 320,
    },
  },
  {
    imageUrl: Image.dockerLogo,
    alt: "Docker",
    size: 200,
    initial: {
      x: 450,
      y: 420,
    },
  },
  {
    imageUrl: Image.tailwindLogo,
    alt: "Tailwind",
    size: 270,
    initial: {
      x: 130,
      y: 580,
    },
  },
  {
    imageUrl: Image.unityLogo,
    alt: "Unity",
    size: 220,
    initial: {
      x: 300,
      y: 750,
    },
  },
  {
    imageUrl: Image.motionLogo,
    alt: "Motion",
    size: 120,
    initial: {
      x: 1600,
      y: 180,
    },
  },
  {
    imageUrl: Image.reactLogo,
    alt: "React",
    size: 120,
    initial: {
      x: 1300,
      y: 300,
    },
  },
  {
    imageUrl: Image.mysqlLogo,
    alt: "MYSQL",
    size: 150,
    initial: {
      x: 1540,
      y: 360,
    },
  },
  {
    imageUrl: Image.redisLogo,
    alt: "Redis",
    size: 280,
    initial: {
      x: 1200,
      y: 500,
    },
  },
  {
    imageUrl: Image.golangLogo,
    alt: "Golang",
    size: 150,
    initial: {
      x: 1500,
      y: 630,
    },
  },
];
