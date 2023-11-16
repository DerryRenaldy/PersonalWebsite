import { ModelingThumbnail } from "@assets/videoModeling/mobile";
import { ModelingVideo } from "@assets/videoModeling";

interface IModelingExpertiseData {
  thumbnailUrl: string;
  videoUrl: string;
  key: string;
  title: string;
}

interface IModelingExpertiseDataDesktop {
  first: IModelingExpertiseData;
  second?: IModelingExpertiseData;
}

export const ModelingExpertiseDataDesktop: IModelingExpertiseDataDesktop[] = [
  {
    first: {
      title: "Axe",
      key: "axe",
      thumbnailUrl: ModelingThumbnail.axeThumbnail,
      videoUrl: ModelingVideo.axe,
    },
    second: {
      title: "Bull",
      key: "bull",
      thumbnailUrl: ModelingThumbnail.bullThumbnail,
      videoUrl: ModelingVideo.bull,
    },
  },
  {
    first: {
      title: "Cheetah",
      key: "cheetah",
      thumbnailUrl: ModelingThumbnail.chetahThumbnail,
      videoUrl: ModelingVideo.cheetah,
    },
    second: {
      title: "Clicker",
      key: "clicker",
      thumbnailUrl: ModelingThumbnail.clickerThumbnail,
      videoUrl: ModelingVideo.clicker,
    },
  },
  {
    first: {
      title: "Creature",
      key: "creature",
      thumbnailUrl: ModelingThumbnail.creatureThumbnail,
      videoUrl: ModelingVideo.creature,
    },
    second: {
      title: "Helmet",
      key: "helmet",
      thumbnailUrl: ModelingThumbnail.helmetThumbnail,
      videoUrl: ModelingVideo.helmet,
    },
  },
  {
    first: {
      title: "Pilar",
      key: "pilar",
      thumbnailUrl: ModelingThumbnail.pilarThumbnail,
      videoUrl: ModelingVideo.pilar,
    },
    second: {
      title: "Skull",
      key: "skull",
      thumbnailUrl: ModelingThumbnail.skullThumbnail,
      videoUrl: ModelingVideo.skull,
    },
  },
  {
    first: {
      title: "Torso",
      key: "torso",
      thumbnailUrl: ModelingThumbnail.torsoThumbnail,
      videoUrl: ModelingVideo.torso,
    },
  },
];

export const ModelingExpertiseDataMobile: IModelingExpertiseData[] = [
  {
    title: "Axe",
    key: "axe",
    thumbnailUrl: ModelingThumbnail.axeThumbnail,
    videoUrl: ModelingVideo.axe,
  },
  {
    title: "Bull",
    key: "bull",
    thumbnailUrl: ModelingThumbnail.bullThumbnail,
    videoUrl: ModelingVideo.bull,
  },
  {
    title: "Cheetah",
    key: "cheetah",
    thumbnailUrl: ModelingThumbnail.chetahThumbnail,
    videoUrl: ModelingVideo.cheetah,
  },
  {
    title: "Clicker",
    key: "clicker",
    thumbnailUrl: ModelingThumbnail.clickerThumbnail,
    videoUrl: ModelingVideo.clicker,
  },
  {
    title: "Creature",
    key: "creature",
    thumbnailUrl: ModelingThumbnail.creatureThumbnail,
    videoUrl: ModelingVideo.creature,
  },
  {
    title: "Helmet",
    key: "helmet",
    thumbnailUrl: ModelingThumbnail.helmetThumbnail,
    videoUrl: ModelingVideo.helmet,
  },
  {
    title: "Pilar",
    key: "pilar",
    thumbnailUrl: ModelingThumbnail.pilarThumbnail,
    videoUrl: ModelingVideo.pilar,
  },
  {
    title: "Skull",
    key: "skull",
    thumbnailUrl: ModelingThumbnail.skullThumbnail,
    videoUrl: ModelingVideo.skull,
  },
  {
    title: "Torso",
    key: "torso",
    thumbnailUrl: ModelingThumbnail.torsoThumbnail,
    videoUrl: ModelingVideo.torso,
  },
];
