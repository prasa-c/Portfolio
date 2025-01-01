import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen bg-black container ">
        <div class="container mx-auto py-4 px-12">
        <HeroSection />
        </div>
      </main>
      
  );
}
