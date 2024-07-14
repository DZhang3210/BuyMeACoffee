import ProfileInfoFormSkeleton from "@/skeletons/ProfileInfoFormSkeleton";
import { Suspense } from "react";

export default function Layout({children}) {
    return (
        <Suspense fallback = {<ProfileInfoFormSkeleton/>}>
            {children}
        </Suspense>
    );
}