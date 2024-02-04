import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <aside className="hidden md:flex w-56 fixed inset-y-0 z-50">
        <Sidebar />
      </aside>
      <main className="h-full md:pl-56 pt-[80px]">{children}</main>
    </div>
  );
};

export default Layout;
