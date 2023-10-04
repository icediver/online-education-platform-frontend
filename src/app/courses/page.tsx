import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";

export const metadata: Metadata = {
    title: "",
    ...NO_INDEX_PAGE,
};

export default function CoursesPage() {
    return <div>CoursesPage</div>;
}
