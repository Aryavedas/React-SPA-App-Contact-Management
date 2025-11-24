import React, { StrictMode, ReactNode } from "react";
import { useAlert } from "@/components/ui/app-alert";

interface AppLayout {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayout) {
    const { node } = useAlert();

    return (
        <StrictMode>
            {/* <main className="pt-4 pb-20 min-h-screen w-full px-[79px] bg-gradient-to-tl from-cyan-100 to-cyan-500 text-slate-800"> */}
            <main className="pt-4 pb-20 min-h-screen w-full px-[79px]">
                <div
                    className={`fixed right-6 top-6 z-[9999] transition-all duration-500 ${node ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                    {node}
                </div>
                {children}
            </main>
        </StrictMode >
    )
}