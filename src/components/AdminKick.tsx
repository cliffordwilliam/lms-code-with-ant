"use client";

import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminKick = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && userId) {
      const isAdmin = "user_2btuONmo41Sz68R31XgWLe6ZZct" === userId;
      if (!isAdmin) {
        router.push("/");
      }
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded || !userId) {
    return;
  }

  return <>{children}</>;
};

export default AdminKick;
