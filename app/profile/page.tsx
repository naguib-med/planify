"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Section } from "@/components/Section";
import Image from "next/image";
import { User, Mail, Calendar } from "lucide-react";
import AppointmentsList from "@/components/AppointmentsList";

const Profile = () => {
    const { data: session } = useSession();
    const appointments: { id: string; date: string; time: string; }[] = [
        {
            id: "1",
            date: "2022-12-12",
            time: "10:00",
        },
        {
            id: "2",
            date: "2022-12-15",
            time: "14:00",
        },
    ];

    if (!session) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-6 text-center">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                    Veuillez vous connecter pour accéder à votre profil.
                </h2>
                <Link href="/auth/signin">
                    <a className="px-6 py-3 mt-4 bg-blue-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                        Connexion
                    </a>
                </Link>
            </div>
        );
    }

    return (
        <Section className="container mx-auto p-6 text-gray-800">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold mb-6 text-primary animate-fade-in">
                    Bonjour, {session.user?.name}
                </h1>
                <div className="relative">
                    <Image
                        src={session.user?.image || "/default-profile.png"}
                        alt="Profile Picture"
                        width={150}
                        height={150}
                        className="rounded-full shadow-lg transition-all transform hover:scale-105"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2 shadow-md text-white">
                        <User />
                    </div>
                </div>
            </div>

            <div className="bg-secondary text-primary-foreground p-6 mt-8 animate-slide-in">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Mail className="w-6 h-6" /> Mes Informations
                </h2>
                <p className="text-lg"><strong>Nom :</strong> {session.user?.name}</p>
                <p className="text-lg"><strong>Email :</strong> {session.user?.email}</p>
            </div>

            <div className="mt-10 animate-slide-in bg-secondary text-primary-foreground p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6" /> Mes Rendez-vous
                </h2>
                <div className="mt-4">
                    {appointments.length > 0 ? (
                        <AppointmentsList appointments={appointments} />
                    ) : (
                        <p>Vous n'avez aucun rendez-vous prévu.</p>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Profile;
