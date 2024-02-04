"use client";

import { useAuth } from "@clerk/nextjs";
import { BookOpen, Compass, Layout, Wrench } from "lucide-react";
import SidebarRoute from "./SidebarRoute";

const userRoutes = [
  { icon: Layout, label: "Dashboard", href: "/" },
  { icon: Compass, label: "Search", href: "/search" },
];

const adminRoutes = [
  { icon: Layout, label: "Dashboard", href: "/" },
  { icon: Compass, label: "Search", href: "/search" },
  { icon: BookOpen, label: "Add Blog", href: "/add-blog" },
  { icon: Wrench, label: "Add Service", href: "/add-service" },
];

const SidebarRoutes = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  if (!isLoaded || !userId) {
    return null;
  }
  const isAdmin = "user_2btuONmo41Sz68R31XgWLe6ZZct" === userId;
  const routes = isAdmin ? adminRoutes : userRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map(({ href, icon, label }) => {
        return (
          <SidebarRoute key={href} icon={icon} label={label} href={href} />
        );
      })}
    </div>
  );
};

export default SidebarRoutes;
