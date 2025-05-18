import BackgroundImage from "@/components/background-image";
import CharacterImage from "@/components/character-image";
import CharacterInfo from "@/components/character-info";
import InfiniteReel from "@/components/infinite-reel";
import SolidBars from "@/components/solid-bars";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-50">
        <BackgroundImage />
      </div>
      {/* Animated Bars Behind Everything */}
      <div className="absolute inset-0 -z-40">
        <img src={"/naruto.png"} alt='shadow' className='absolute inset-0 brightness-0 opacity-40 w-[1000px] h-auto' />
        <SolidBars />

      </div>

      <div className="absolute inset-0 -z-20 translate-y-[10%] lg:translate-y-0 lg:translate-x-[25%]">
        <InfiniteReel />
        </div>

      {/* Main Content */}
      <div className="relative h-full z-10 flex lg:justify-center lg:space-x-20 lg:flex-row lg:-bottom-[40px]">
        <CharacterInfo />
        <CharacterImage />
      </div>
    </div>
  );
}
