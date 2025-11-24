import React, { useEffect } from "react";
import AppLayout from "@/layouts/contact/app-layout";
import CardContact from "@/pages/contact/ui-card-contact";
import AppHeader from "@/components/app-header";
import { PageProps } from '@inertiajs/core';
import { router } from '@inertiajs/react';
import Allert, { useAlert } from '@/components/ui/app-alert';

// CRUD
import AddContact from "./ui-add-contact";
import EditContact from "./ui-edit-contact";

interface Contact {
    id: number;
    name: string;
    email: string;
    description: string;
    phone: string;
    address: string;
}

interface Props extends PageProps {
    contacts: Contact[];
}

export default function ContactManagement({ contacts }: Props) {
    const [isVisible, setIsVisible] = React.useState(false);

    // Create Modal State
    const [openCreateModal, setOpenCreateModal] = React.useState(false);

    // Edit Modal State
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const [selectedContactId, setSelectedContactId] = React.useState<number | null>(null);
    const userContact = contacts.find(c => c.id === selectedContactId);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleOpenCreateModal = () => {
        setOpenCreateModal(true);
    }

    const handleCloseCreateModal = () => {
        setOpenCreateModal(false);
    }

    const handleOpenEditModal = (id: number) => {
        setSelectedContactId(id);
        setOpenEditModal(true);
    }

    const handleCloseEditModal = () => {
        setOpenEditModal(false);
        setSelectedContactId(null);
    }

    const handleDeleteContact = (id: number) => {
        router.post("/delete-contact", { id }, {
            onSuccess: () => {
                useAlert.getState().showAlert(
                    <Allert visible={true} type='success' message='Anda telah berhasil menghapus kontak' title='Berhasil Hapus Kontak' />
                );
                setTimeout(() => {
                    useAlert.getState().showAlert(
                        <Allert visible={false} type='success' message='Anda telah berhasil menghapus kontak' title='Berhasil Hapus Kontak' />
                    );
                }, 2000);
            },

            onError: () => {
                useAlert.getState().showAlert(
                    <Allert visible={true} type='error' message='Gagal / Fitur Belum Tersedia' title='Gagal' />
                );

                setTimeout(() => {
                    useAlert.getState().showAlert(
                        <Allert visible={false} type='error' message='Gagal / Fitur Belum Tersedia' title='Gagal' />
                    );
                }, 2000);
            }
        })
    }

    return (
        <AppLayout>
            <div style={{ transitionDelay: `0ms` }} className={`${isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`} transition-all duration-400`}>
                <AppHeader onClick={handleOpenCreateModal} />
            </div>

            <div className={`${openCreateModal ? `visible` : `hidden`}`}>
                <AddContact onClose={handleCloseCreateModal} />
            </div>

            <div className={`${openEditModal ? `visible` : `hidden`}`}>
                {userContact && openEditModal && (
                    <EditContact onClose={handleCloseEditModal} id={userContact} />
                )}
            </div>

            <section className="max-w-7xl mx-auto">
                <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Card Contacts Section */}
                    {contacts.map((contact, index) => (
                        <div key={contact.id} className={`transition-all duration-700 ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <CardContact {...contact} onEdit={(id) => handleOpenEditModal(id)} onDelete={(id) => handleDeleteContact(id)} />
                        </div>
                    ))}
                </div>
            </section>
        </AppLayout>
    )
}