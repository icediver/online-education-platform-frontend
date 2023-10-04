"use client";

import Button from "@/components/ui/button/Button";
import { useActions } from "@/hooks/useActions";

interface IProfile {}
export default function Profile({}: IProfile) {
  const { logout } = useActions();
  return (
    <div>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
