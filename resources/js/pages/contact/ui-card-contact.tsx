import React from "react";
import { FaTrashAlt } from "react-icons/fa";

interface CardContactProps {
    id: number,
    name: string,
    email: string,
    description: string,
    phone: string,
    address: string,
    onEdit: (id: number) => void,
    onDelete: (id: number) => void,
}

export default function CardContact({ id, name, email, description, phone, address, onEdit, onDelete }: CardContactProps) {
    return (
        <div className="relative m-auto w-full p-6 bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:shadow-lg">
            <button
                onClick={() => onDelete(id)}
                className="cursor-pointer absolute top-4 right-4 p-2 rounded-full text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all duration-200 group"
                title="Hapus Kontak"
            >
                <FaTrashAlt />
            </button>

            <div className="flex flex-col gap-5">
                {/* Tambahkan pr-8 (padding-right) agar teks panjang tidak menabrak tombol delete */}
                <div className="space-y-1 pb-4 border-b border-gray-200 pr-8">
                    <h1 className="text-xl font-bold text-gray-900 tracking-tight">{name}</h1>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{description}</p>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-medium text-gray-400">Email</span>
                        <span className="text-sm font-semibold text-gray-700">{email}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-medium text-gray-400">Nomor</span>
                        <span className="text-sm font-semibold text-gray-700">{phone}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-medium text-gray-400">Address</span>
                        <span className="text-sm font-semibold text-gray-700 text-right truncate max-w-[150px]">{address}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                    <a
                        href={`https://wa.me/${phone}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#22c15c] hover:bg-[#20bd5a] text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-green-500/20"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zM12.05 20.21c-1.5 0-2.97-.4-4.26-1.16l-.3-.18-3.11.82.83-3.03-.19-.31a8.19 8.19 0 01-1.26-4.44c0-4.52 3.67-8.19 8.19-8.19 2.19 0 4.24.85 5.78 2.39 1.54 1.54 2.39 3.59 2.39 5.78 0 4.51-3.67 8.19-8.18 8.19zm4.51-6.13c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.23-.18-.48-.3z" />
                        </svg>
                        WhatsApp
                    </a>
                    <button onClick={() => onEdit(id)} className="cursor-pointer px-4 py-2.5 bg-white text-slate-700 border border-gray-200 text-sm font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all">
                        Lihat
                    </button>
                </div>
            </div>
        </div>
    )
}