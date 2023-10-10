"use client";

import Button from "@/components/ui/button/Button";
import { useActions } from "@/hooks/useActions";
import { useRouter } from "next/navigation";

interface IProfile {}
export default function Profile({}: IProfile) {
  const { logout } = useActions();
  const { replace } = useRouter();

  function logoutHandler() {
    logout();
    replace("/");
  }

  return (
    <div>
      Profile Page
      <Button
        onClick={logoutHandler}
        className="mx-auto text-lg bg-primary hover:bg-primary/70 mt-10"
      >
        Logout
      </Button>
    </div>
  );
}
