"use client";

import { UserButton } from "@clerk/nextjs";

const NavbarRoutes = () => {
  return (
    <div className="flex ml-auto gap-x-2">
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default NavbarRoutes;
