import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden hover:opacity-75">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;