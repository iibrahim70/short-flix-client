"use client";

import { IShort } from "@/types/IShorts";
import { Heart, Play, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge, Button } from "../ui";
import { VideoModal } from "../VideoModal";
import { abbreviateNumber, formatDuration } from "@/utils";

export const VideoCard = ({ data }: { data: IShort }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group relative bg-card rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        {/* Video Container */}
        <div
          className="relative aspect-video bg-black cursor-pointer"
          onClick={() => setIsModalOpen(true)}
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
        >
          {isPlaying ? (
            <video
              src={data?.videoUrl}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <Image
                src={data?.thumbnail}
                alt={data?.title}
                fill
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                  <Play fill="white" className="size-6" />
                </div>
              </div>
            </>
          )}

          {/* Duration Badge */}
          <p className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs font-medium text-white">
            {formatDuration(data?.duration)}
          </p>
        </div>

        {/* Info Section */}
        <div className="p-5">
          <div className="space-y-2.5">
            {/* Title */}
            <p className="font-bold text-white/90 text-lg leading-tight line-clamp-1">
              {data?.title}
            </p>

            {/* Mock Data */}
            <div className="flex items-center space-x-3 text-xs">
              <span className="text-green-500 font-semibold">98% Match</span>
              <span>{abbreviateNumber(data?.views)}</span>
              <span className="border border-gray-600 px-1 rounded">HD</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {data?.tags?.map((tag: string) => (
                <Badge variant="secondary" key={tag}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between mt-5 pt-5 border-t">
            <div className="flex space-x-3.5">
              <button>
                <Heart className="size-5 text-gray-500 hover:text-primary transition-colors" />
              </button>

              <button>
                <Share2 className="size-5 text-gray-500 hover:text-white transition-colors" />
              </button>
            </div>

            <Button size="sm" onClick={() => setIsModalOpen(true)}>
              Watch Now
            </Button>
          </div>
        </div>
      </div>

      <VideoModal
        data={data}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
