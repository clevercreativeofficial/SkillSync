
import { Button } from "@/components/ui/button";
import FeaturedCreatives from "@/components/featuredCreatives";

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] bg-white">
        <h1 className="title max-w-[650px] mx-auto text-center text-[3rem] font-bold mb-4">Showcase Your Skills, Find Your Creative Tribe.</h1>
        <p className="text-lg max-w-[600px] mx-auto text-center text-gray-700 mb-8">SkillSync connects designers, developers, and creators to collaborate on amazing projects.
          Build your portfolio, discover talent, and grow together.</p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-rose-500 hover:bg-rose-600">Join Now</Button>
          <Button size="lg">
            Explore Creatives
          </Button>
        </div>
      </section>

      {/* Featured Creatives */}
      <FeaturedCreatives />



    </main>
  );
}
