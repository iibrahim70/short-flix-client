import { Film, Play, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui";

export const Hero = () => {
  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />

      <Image
        src="https://res.cloudinary.com/ibrahim70/image/upload/movie-banner_quayd0.jpg"
        fill
        className="w-full h-full object-cover"
        alt="Hero Banner"
      />

      <div className="absolute bottom-[130px] z-20 w-full">
        <div className="container">
          <div className="flex items-center gap-2.5 text-primary font-bold tracking-widest text-sm pb-2.5">
            <Film className="size-4" />
            <span>N E W R E L E A S E</span>
          </div>

          <h1 className="font-black text-white drop-shadow-lg uppercase pb-3.5">
            The Witcher
          </h1>

          <p className="text-gray-200 text-base mb-5">
            Dive into the dark fantasy world of The Witcher, where monsters
            roam, destinies collide, and every choice can change fate. Join
            Geralt of Rivia on a thrilling journey filled with magic, danger,
            and epic adventures.
          </p>

          <div className="flex items-center gap-3">
            <Button size="lg" className="uppercase">
              <Play /> Watch
            </Button>

            <Button size="lg" className="uppercase" variant="secondary">
              <Plus /> Add to list
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
