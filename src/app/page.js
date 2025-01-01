import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen bg-black container ">
        <Navbar/>
        <div className="container mt-24 mx-auto py-4 px-28">
        <HeroSection />
        </div>
      </main>
      
  );
}
