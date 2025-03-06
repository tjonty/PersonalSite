"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/firebase";

export default function TrackPageViews() {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname) {
            trackEvent("page_view", { page_path: pathname });
        }
    }, [pathname]);

    return null;
}