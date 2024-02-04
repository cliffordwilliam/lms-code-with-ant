import MobileSidebar from "./MobileSidebar";
import NavbarRoutes from "./NavbarRoutes";

const Navbar = () => {
  return (
    <nav className="h-[80px] p-4 md:pl-60 fixed inset-y-0 w-full z-50 border-b flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </nav>
  );
};

export default Navbar;
