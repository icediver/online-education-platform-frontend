import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Profile from "@/components/screens/profile/Profile";

export const metadata: Metadata = {
  title: "",
  ...NO_INDEX_PAGE,
};

export default function ProfilePage() {
  return (
    <div>
      <Profile />
    </div>
  );
}
