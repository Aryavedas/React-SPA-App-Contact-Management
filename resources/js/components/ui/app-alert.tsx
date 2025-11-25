import { create } from "zustand";
import React, { StrictMode, ReactNode } from "react";

interface AllertProps {
    type?: "success" | "error";
    title?: string;
    message?: string;
    visible: boolean;
}

interface AlertState {
    node: ReactNode | null;
    showAlert: (node: ReactNode) => void;
    clearAlert: () => void;
}

export const useAlert = create<AlertState>()((set) => ({
    node: null,

    showAlert: (node) => set(() => ({
        node
    })),

    clearAlert: () => set(() => ({
        node: null
    })),
}));

export default function Allert({ type = "success", title, message, visible = false }: AllertProps) {

    const isSuccess = type === "success";

    // Ganti style dasar ke Dark Mode
    const baseCardClass = "z-[999] absolute mt-5 lg:mt-14 -mr-3 right-0 top-[540px] w-80 bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden flex p-4 gap-3";

    const accentClass = isSuccess
        ? "border-l-4 border-l-green-500"
        : "border-l-4 border-l-red-500";

    return (
        <StrictMode>
            <div className="relative">
                <div className={`${baseCardClass} ${accentClass} transition-all duration-500 ${visible ? "block opacity-100 translate-x-0" : "opacity-0 translate-x-10 invisible"}`}>

                    <div className={`mt-0.5 flex-shrink-0 ${isSuccess ? "text-green-400" : "text-red-400"}`}>
                        {isSuccess ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>

                    {/* Bagian Konten Teks */}
                    <div className="flex flex-col justify-center">
                        {/* Judul jadi Putih */}
                        <h1 className="font-semibold text-white text-sm leading-none mb-1">
                            {title || (isSuccess ? "Berhasil Disimpan" : "Terjadi Kesalahan")}
                        </h1>
                        {/* Pesan jadi abu-abu terang */}
                        <p className="text-xs text-gray-400 leading-relaxed">
                            {message || "Silakan coba beberapa saat lagi."}
                        </p>
                    </div>

                </div>
            </div>
        </StrictMode>
    )
}