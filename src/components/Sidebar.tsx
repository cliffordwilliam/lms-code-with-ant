import Logo from "./Logo";
import SidebarRoutes from "./SidebarRoutes";

const Sidebar = () => {
  return (
    <div className="h-full w-full flex-col border-r overflow-y-auto bg-white shadow-sm">
      <Logo />
      <SidebarRoutes />
    </div>
  );
};

export default Sidebar;
