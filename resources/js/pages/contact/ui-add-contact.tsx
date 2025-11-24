import React, { FormEvent, useState } from 'react';
import { router } from '@inertiajs/react';
import Allert, { useAlert } from '@/components/ui/app-alert';

interface AddContactProps {
    onClose: () => void;
}

export default function AddContact({ onClose }: AddContactProps) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        description: "",
        address: "",
    })

    const updateField = (key: string, value: string) => {
        setForm(prev => ({ ...prev, [key]: value }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // console.log(form);

        router.post('/add-contact', form, {
            preserveScroll: true,

            onSuccess: () => {
                onClose();
                useAlert.getState().showAlert(
                    <Allert visible={true} type='success' message='Kontak Terbaru Telah Tersimpan' title='Berhasil Menyimpan Kontak' />
                );
                setForm(prev => ({
                    ...prev,
                    name: "",
                    email: "",
                    phone: "",
                    description: "",
                    address: "",
                }));

                setTimeout(() => {
                    useAlert.getState().showAlert(
                        <Allert visible={false} type='success' message='Kontak Terbaru Telah Tersimpan' title='Berhasil Menyimpan Kontak' />
                    );
                }, 2000);
            },

            onError: () => {
                onClose();
                useAlert.getState().showAlert(
                    <Allert visible={true} type='error' message='Gagal / Fitur Belum Tersedia' title='Gagal' />
                );
                setForm(prev => ({
                    ...prev,
                    name: "",
                    email: "",
                    phone: "",
                    description: "",
                    address: "",
                }));

                setTimeout(() => {
                    useAlert.getState().showAlert(
                        <Allert visible={false} type='error' message='Gagal / Fitur Belum Tersedia' title='Gagal' />
                    );
                }, 2000);
            }
        });
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-all duration-300">
            <div className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100">
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <div>
                        <h2 className="text-xl font-bold tracking-tight text-gray-900">Tambah Kontak Baru</h2>
                        <p className="text-sm text-gray-500 mt-1">Isi informasi detail kontak di bawah ini.</p>
                    </div>
                    <button onClick={onClose} className="cursor-pointer p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} action="">
                    <div className="p-6 space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Nama Lengkap</label>
                            <input
                                value={form.name}
                                onChange={(e) => updateField("name", e.target.value)}
                                type="text"
                                placeholder="Contoh: Budi Santoso"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fb8500] focus:ring-2 focus:ring-[#fb8500]/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Email</label>
                                <input
                                    value={form.email}
                                    onChange={(e) => updateField("email", e.target.value)}
                                    type="email"
                                    placeholder="nama@email.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fb8500] focus:ring-2 focus:ring-[#fb8500]/20 outline-none transition-all text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Nomor Telepon</label>
                                <input
                                    value={form.phone}
                                    onChange={(e) => updateField("phone", e.target.value)}
                                    type="tel"
                                    placeholder="+62 8xx xxxx"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fb8500] focus:ring-2 focus:ring-[#fb8500]/20 outline-none transition-all text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Deskripsi</label>
                            <input
                                value={form.description}
                                onChange={(e) => updateField("description", e.target.value)}
                                type="text"
                                placeholder="Contoh: Teman dari kantor"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fb8500] focus:ring-2 focus:ring-[#fb8500]/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Alamat</label>
                            <textarea
                                value={form.address}
                                onChange={(e) => updateField("address", e.target.value)}
                                rows={3}
                                placeholder="Masukkan alamat lengkap..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fb8500] focus:ring-2 focus:ring-[#fb8500]/20 outline-none transition-all text-sm resize-none"
                            ></textarea>
                        </div>
                    </div>
                    <div className="p-6 border-t border-gray-100 flex flex-col-reverse md:flex-row justify-end gap-3 bg-gray-50/50">
                        <div onClick={onClose} className="cursor-pointer px-6 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-all">
                            Batal
                        </div>

                        <button type="submit" className="cursor-pointer px-6 py-2.5 text-sm font-bold text-white bg-[#fb8500] rounded-xl shadow-md shadow-orange-500/20 hover:bg-[#e07a00] hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all">
                            Simpan Kontak
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}