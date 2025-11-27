import { Film, Search } from "lucide-react";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <nav className="py-5 sticky left-0 top-0 z-10 bg-neutral-900 border-b">
      <div className="container flex items-center justify-between gap-5">
        {/* left side */}
        <div className="flex items-center gap-2.5">
          <div className="size-10 rounded-lg bg-red-600 flex items-center justify-center">
            <Film className="size-6" />
          </div>

          <h5 className="tracking-tight">
            Short<span className="text-red-600">flix</span>
          </h5>
        </div>

        {/* right side */}
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />

            <Input
              type="text"
              placeholder="Search videos..."
              className="pl-10 w-80"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
