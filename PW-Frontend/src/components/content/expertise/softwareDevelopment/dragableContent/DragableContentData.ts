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
  isBlur?: boolean;
};

export const MetaDataLeft: Data[] = [
  {
    imageUrl: Image.jsLogo,
    alt: "Javascript",
    size: 130,
    initial: {
      x: 390,
      y: 150,
    },
  },
  {
    imageUrl: Image.tsLogo,
    alt: "Typescript",
    size: 130,
    initial: {
      x: 150,
      y: 320,
    },
  },
  {
    imageUrl: Image.dockerLogo,
    alt: "Docker",
    size: 200,
    initial: {
      x: 350,
      y: 420,
    },
  },
  {
    imageUrl: Image.tailwindLogo,
    alt: "Tailwind",
    size: 270,
    initial: {
      x: 30,
      y: 580,
    },
  },
  {
    imageUrl: Image.unityLogo,
    alt: "Unity",
    size: 220,
    initial: {
      x: 100,
      y: 750,
    },
  },
];

export const MetaDataRight: Data[] = [
  {
    imageUrl: Image.motionLogo,
    alt: "Motion",
    size: 120,
    initial: {
      x: 500,
      y: 180,
    },
  },
  {
    imageUrl: Image.reactLogo,
    alt: "React",
    size: 120,
    initial: {
      x: 200,
      y: 300,
    },
  },
  {
    imageUrl: Image.mysqlLogo,
    alt: "MYSQL",
    size: 150,
    initial: {
      x: 440,
      y: 360,
    },
  },
  {
    imageUrl: Image.redisLogo,
    alt: "Redis",
    size: 280,
    initial: {
      x: 100,
      y: 500,
    },
  },
  {
    imageUrl: Image.golangLogo,
    alt: "Golang",
    size: 150,
    initial: {
      x: 400,
      y: 630,
    },
  },
];
