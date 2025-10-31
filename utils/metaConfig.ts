export interface MetaInfo {
  title: string;
  description: string;
  keywords: string;
}

export const metaConfig: Record<string, MetaInfo> = {
  "/": {
    title: "MyQStudio – Learn Mind Skills",
    description:
      "Learn Mind Skills with microlearning modules combining real-life scenarios with the science of how our brain works.",
    keywords: "Mind Skills, brain, science, Mental Fitness, MyQ, MyQStudio, happiness",
  },
  "/teams": {
    title: "Our Team – MyQStudio",
    description: "A team united by a common mission – Mental fitness for everyone.",
    keywords: "Team, Mental Fitness, MyQ, MyQStudio, happiness",
  },
  "/about-us": {
    title: "About Us – MyQStudio",
    description: "Learn more about MyQStudio and our mission for mental fitness.",
    keywords: "About us, Mental Fitness, MyQ, MyQStudio, happiness",
  },
  "/individuals": {
    title: "Individuals – MyQStudio",
    description: "Notice changes in your thoughts, emotions, and actions with MyQStudio.",
    keywords: "Individuals, Mental Fitness, MyQ, MyQStudio, happiness",
  },
  "/organizations": {
    title: "Organizations – MyQStudio",
    description: "Transformative solutions to boost employee engagement and performance.",
    keywords:
      "Mind Skills, Organization, transformative, Mental Fitness, MyQ, MyQStudio, happiness",
  },
  "/plans": {
    title: "Plans – MyQStudio",
    description:
      "Try MyQStudio, a personal development app, for free! Monthly & Annual Subscriptions.",
    keywords: "Mind skills, Plans, personal development, Mental Fitness, MyQ, MyQStudio, happiness",
  },
  "/resources": {
    title: "Resources – MyQStudio",
    description: "Explore powerful resources to strengthen your mind skills and emotional fitness.",
    keywords: "Mind Skills, Resources, Mental Fitness, MyQ, MyQStudio, happiness",
  },
};
