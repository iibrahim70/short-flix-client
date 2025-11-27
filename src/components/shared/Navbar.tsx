import { Search } from "lucide-react";
import { Input } from "../ui/input";

const Navbar = () => {
  const navItems = ["Home", "Tv Shows", "Movies", "Recently Added", "My List"];

  return (
    <nav className="py-5 sticky left-0 top-0 z-10 bg-neutral-900 border-b">
      <div className="container flex items-center justify-between gap-5">
        {/* Left side */}
        <h5 className="text-red-500">Shortflix</h5>

        {/* Middle */}
        <ul className="flex items-center justify-center gap-5 text-sm font-medium">
          {navItems?.map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-all duration-300 hover:text-red-500 hover:underline underline-offset-10"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />

            <Input
              type="text"
              placeholder="Search videos or tags..."
              className="pl-10 w-80"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
