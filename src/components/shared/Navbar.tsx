"use client";

import { Search } from "lucide-react";
import { Input } from "../ui";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ["Home", "Tv Shows", "Movies", "Recently Added", "My List"];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window?.scrollY > 0);

    // Handle scroll for navbar styling
    window.addEventListener("scroll", handleScroll);

    // Cleanup when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "py-5 fixed top-0 w-full z-50 border-b transition-colors duration-300",
        isScrolled ? "bg-black" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between gap-5">
        {/* Left side */}
        <h5 className="text-primary uppercase">Shortflix</h5>

        {/* Middle */}
        <ul className="flex items-center justify-center gap-5 text-sm font-medium">
          {navItems?.map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-all duration-300 hover:text-primary hover:underline underline-offset-10"
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
