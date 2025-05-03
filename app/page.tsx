import FametonicLanding from "@/fametonic-landing";

export const dynamic = "force-static";

export default async function Home() {
  async function getFeatures(): Promise<string[]> {
    return [
      "Start growing your influence right away—no waiting required!",
      "Create viral TikToks and Reels step by step with easy-to-follow formats",
      "Use a Personal AI Writer to boost your content",
      "Learn from expert-led courses designed for aspiring influencers",
    ];
  }

  const features = await getFeatures();

  return <FametonicLanding features={features} />;
}
