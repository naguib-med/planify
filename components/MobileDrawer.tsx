import Link from 'next/link';
import { Home, Calendar, Info, User, X } from 'lucide-react';

type MobileDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
    return (
        <div
            className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-primary text-primary-foreground transition-transform duration-300 transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <button className="absolute right-7 top-4 p-3" onClick={onClose}>
                <X size={32} />
            </button>
            <ul className="flex flex-col justify-center items-center space-y-4">
                <li className="text-2xl hover:text-primary hover:font-semibold flex items-center space-x-2">
                    <Home className="w-6 h-6" />
                    <Link href="/">Accueil</Link>
                </li>
                <li className="text-2xl hover:text-primary hover:font-semibold flex items-center space-x-2">
                    <Calendar className="w-6 h-6" />
                    <Link href="/appointments">Rendez-vous</Link>
                </li>
                <li className="text-2xl hover:text-primary hover:font-semibold flex items-center space-x-2">
                    <Info className="w-6 h-6" />
                    <Link href="/about">À propos</Link>
                </li>
                <li className="text-2xl hover:text-primary hover:font-semibold flex items-center space-x-2">
                    <User className="w-6 h-6" />
                    <Link href="/profile">Profil</Link>
                </li>
            </ul>
        </div>
    );
}
