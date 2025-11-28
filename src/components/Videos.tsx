import { Badge } from "./ui";
import { VideoCard } from "./cards/VideoCard";
import { tags } from "@/data";
import { IShort } from "@/types/IShorts";

export const Videos = async () => {
  const response = await fetch(
    "https://short-flix-server.onrender.com/api/shorts",
    {
      cache: "force-cache",
    }
  );
  const { data } = await response.json();

  return (
    <section className="bg-black">
      <div className="container py-16 space-y-10">
        {/* Title and tags */}
        <div className="space-y-2">
          <h5>Trending Now</h5>

          {tags?.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="m-1 h-8 px-5 cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Video layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.map((item: IShort) => (
            <VideoCard key={item?._id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
