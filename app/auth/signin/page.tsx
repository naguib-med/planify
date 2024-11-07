'use client';

import { signIn } from "next-auth/react"
import { Button } from '@/components/ui/button';

export default function SignIn() {
    const handleSignIn = async (provider: string) => {
        await signIn(provider, { redirectTo: '/' });
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="bg-primary p-8 shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-primary-foreground">
                    Se connecter
                </h1>

                <Button
                    onClick={() => handleSignIn('google')}
                    variant="outline"
                    className="w-full mb-4 py-6"
                >
                    Connexion avec Google
                </Button>

                <Button
                    onClick={() => handleSignIn('github')}
                    variant="outline"
                    className="w-full py-6"
                >
                    Connexion avec GitHub
                </Button>
            </div>
        </div>
    );
}
