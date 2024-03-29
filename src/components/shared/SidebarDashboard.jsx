import React from "react";
import Logo from "@/components/customUI/Logo";
import { Button } from "../ui/button";
import { Bookmark, LogOut, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SidebarDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.slice(1).split("/")[0];
  return (
    <div className="flex flex-col justify-between p-6 border-r-2 h-screen">
      <div className="flex flex-col gap-24">
        <Logo />
        <ul className="flex flex-col gap-4">
          <Button
            size="lg"
            variant="ghost"
            className={`flex gap-2 text-base justify-start items-center w-full
            ${
              path == "profile"
                ? "bg-slate-100 font-bold dark:bg-slate-800"
                : ""
            }`}
            onClick={() => navigate("/profile")}
          >
            <User />
            Profile
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className={`flex gap-2 text-base justify-start items-center w-full
            ${
              path == "bookmarks"
                ? "bg-slate-100 font-bold dark:bg-slate-800"
                : ""
            }
            `}
            onClick={() => navigate("/bookmarks")}
          >
            <Bookmark />
            Bookmarks
          </Button>
        </ul>
      </div>
      <Button
        className="font-bold flex gap-2 text-base justify-center items-center
        text-red-500 hover:text-red-500 hover:bg-red-100 dark:hover:text-red-500 dark:hover:bg-red-900"
        variant="ghost"
      >
        <LogOut />
        Logout
      </Button>
    </div>
  );
}
