"use client";
import { GithubIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex place-content-center py-5">
      <div className="flex w-1/2 flex-row items-center justify-between">
        <div className="flex">
          <Link href="/" className="hover:scale-105">
            <div>
              🧺 <span className="text-lg">Baguni</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-row gap-5">
          <Link href="https://github.com/i2gor87/baguni" target="_blank">
            <Button variant="ghost" size="icon" className="">
              <GithubIcon className="block h-[1.5rem] w-[1.3rem]" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className=""
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            <SunIcon className="block h-[1.5rem] w-[1.3rem] dark:hidden" />
            <MoonIcon className="hidden h-5 w-5 dark:block" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
