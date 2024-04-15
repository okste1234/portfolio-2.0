type HeadingPropType = {
  title: string;
  subtitle?: string;
};

type HeroTypes = {
  title: string;
  description?: string;
  showPath?: boolean;
};

type DropDownProps = {
  title: string;
  description?: string;
};

type ProjectDescriptionProp = {
  _id: string;
  name: string;
  description: string;
  url: string;
  overview?: string[];
  highlights: string[];
  banner: any;
  changelog: string;
};

type ProjectCardProp = {
  _id: string;
  projectBanner: any;
  name: string;
  description: string;
  slug: string;
};
