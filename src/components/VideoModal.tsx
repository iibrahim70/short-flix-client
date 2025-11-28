import { X, Heart, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IShort } from "@/types/IShorts";

export const VideoModal = ({
  data,
  open,
  onClose,
}: {
  data: IShort;
  open: boolean;
  onClose: () => void;
}) => {
  if (!open || !data) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl animate-in fade-in zoom-in-95 duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-5 -right-10 size-10 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-colors"
        >
          <X className="size-5" />
        </button>

        {/* Video Container */}
        <div className="rounded-lg overflow-hidden">
          <div className="aspect-video relative">
            <video
              src={data?.videoUrl}
              className="w-full h-full object-contain"
              autoPlay
              controls
            />
          </div>

          {/* Video Info */}
          <div className="p-5 bg-card space-y-2.5">
            <div className="flex items-center justify-between gap-5">
              <h6>{data?.title}</h6>

              <div className="flex space-x-3.5">
                <button>
                  <Heart className="size-5 text-gray-500 hover:text-primary transition-colors" />
                </button>

                <button>
                  <Share2 className="size-5 text-gray-500 hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            <p className="line-clamp-3 text-justify">{data?.description}</p>

            <div className="flex flex-wrap gap-2">
              {data?.tags?.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
