import React, { StrictMode } from "react";

interface HeaderProps {
    onClick: () => void;
};

export default function AppHeader({ onClick }: HeaderProps) {
    return (
        <StrictMode>
            <section className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 md:p-8 border border-gray-200 rounded-2xl shadow-sm shadow-gray-200/50 mb-8 bg-white transition-all">
                <div className="flex flex-col gap-3 max-w-2xl">
                    <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-pink-50 px-2.5 py-0.5 text-xs font-semibold text-pink-600 ring-1 ring-inset ring-pink-500/10">
                            Manage
                        </span>
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-600 ring-1 ring-inset ring-green-600/10">
                            Easy
                        </span>
                    </div>

                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Contact Management
                        </h1>
                        <p className="text-base text-gray-500 leading-relaxed">
                            Manage your contacts efficiently and effectively.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-auto mt-2 md:mt-0">
                    <button onClick={onClick}
                        className="cursor-pointer group flex items-center justify-center gap-2 px-6 py-3 bg-[#fb8500] text-white font-semibold rounded-xl shadow-sm transition-all duration-300 hover:bg-[#e07a00] hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Tambah Kontak
                    </button>
                </div>
            </section>
        </StrictMode>
    )
}