import ViewProfileSkeleton from "@/skeletons/ViewProfileSkeleton";
import { Suspense } from "react";

export default function Layout({children}) {
    return (
        <Suspense fallback = {<ViewProfileSkeleton/>}>
            {children}
        </Suspense>
    );
}