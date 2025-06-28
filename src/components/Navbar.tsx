"use client";

import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import {
  LogOut,
  Moon,
  Settings,
  User,
  Sun,
  Sidebar,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useSidebar } from "../components/ui/sidebar";

import { Input } from "./ui/input";

const Navbar = () => {
  const { setTheme } = useTheme();
  const { toggleSidebar } = useSidebar();
  return (
    <nav className="py-2 px-4 flex items-center justify-between  sticky top-0  z-20 ">
      {/* Right Side  */}
      <div className="flex flex-row gap-2 flex-nowrap items-center">
        <Button
          className="m-0"
          size={"lg"}
          variant={"ghost"}
          onClick={toggleSidebar}
        >
          <Sidebar></Sidebar>
        </Button>
        <div className="text-xl font-bold  w-fit text-nowrap pr-2">
          Projects
        </div>

        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground " />
          <Input
            type="search"
            placeholder="Search Or type..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2" title="Add">
        <Button variant="outline" size={"icon"}>
          <Plus></Plus>
        </Button>
        {/* theme dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Avatar dropdown menu  */}

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10} align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="size-[1.2rem] mr-2"></User> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="size-[1.2rem] mr-2"></Settings> Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="size-[1.2rem] mr-2"></LogOut>Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
