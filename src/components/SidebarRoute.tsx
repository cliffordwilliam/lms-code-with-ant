"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarRouteProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarRoute = ({ icon: Icon, label, href }: SidebarRouteProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const isActive =
    (pathName === "/" && href === "/") || // root?
    pathName === href || // other? || sub other?
    pathName?.startsWith(`${href}/`);
  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-2 py-4 px-6 hover:bg-slate-300/20 border-r-4 border-transparent",
        isActive && "bg-sky-200/20 hover:bg-sky-200/20 border-sky-700"
      )}
    >
      <Icon
        size={22}
        className={cn("text-slate-500", isActive && "text-sky-700")}
      />
      <span
        className={cn(
          "text-slate-500 text-sm font-[500] hover:text-slate-600",
          isActive && "text-sky-700 hover:text-sky-700"
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default SidebarRoute;
