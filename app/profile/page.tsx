'use client';

import { useSession, signOut } from 'next-auth/react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Image from "next/image";

const ProfilePage = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <p>Chargement...</p>;
    }

    if (!session) {
        return <p>Vous devez être connecté pour accéder à cette page.</p>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <Card className="w-full max-w-md p-8 space-y-4 bg-card">
                <CardHeader className="flex flex-col items-center">
                    <Avatar className="w-24 h-24 mb-4">
                        {session.user?.image ? (
                            <Image
                                src={session.user?.image}
                                width={96}
                                height={96}
                                alt="Avatar de l'utilisateur"
                                className="rounded-full"
                            />
                        ) : (
                            <span className="text-3xl">
                                {session.user?.name?.charAt(0).toUpperCase()}
                            </span>
                        )}
                    </Avatar>
                    <CardTitle className="text-xl font-semibold">
                        {session.user?.name}
                    </CardTitle>
                </CardHeader>
                <Separator className="my-4" />
                <CardContent>
                    <p className="text-gray-600"><strong>Email :</strong> {session.user?.email}</p>
                </CardContent>
                <Separator className="my-4" />
                <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => signOut()}>
                        Se déconnecter
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProfilePage;
