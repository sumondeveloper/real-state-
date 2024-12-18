import {
  FeatureSvg1,
  FeatureSvg2,
  FeatureSvg3,
  FeatureSvg4,
} from "../components/svg/Svg";

export const FeaturesData = [
  {
    id: crypto.randomUUID(),
    title: "Premium Property Listings",
    desc: "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
    cover: FeatureSvg1,
  },
  {
    id: crypto.randomUUID(),
    title: "Personalized Property Matching",
    desc: "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
    cover: FeatureSvg2,
  },
  {
    id: crypto.randomUUID(),
    title: "Expert Guidance and Support",
    desc: "Benefit from the expertise of our dedicated team of real estate professionals.",
    cover: FeatureSvg3,
  },
  {
    id: crypto.randomUUID(),
    title: "Virtual Tours",
    desc: "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
    cover: FeatureSvg4,
  },
];
