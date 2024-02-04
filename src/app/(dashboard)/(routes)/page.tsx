import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Page = () => {
  return (
    <>
      <UserButton afterSignOutUrl="/sign-in" />
    </>
  );
};

export default Page;
