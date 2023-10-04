import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import LiveClass from "@/components/screens/live-class/LiveClass";

export const metadata: Metadata = {
    title: "",
    ...NO_INDEX_PAGE,
};

export default function LiveClassPage() {
    return <LiveClass />;
}
