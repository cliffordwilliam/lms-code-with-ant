import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Page = () => {
  return (
    <main>
      <h1>Home</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
};

export default Page;
