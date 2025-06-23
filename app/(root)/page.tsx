
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to SkillSync</h1>
        <p className="text-lg text-gray-700 mb-8">Your journey to mastering skills starts here.</p>
        <Button className="bg-rose-500 hover:bg-rose-600">Get Started</Button>
      </div>
    </section>
  );
}
