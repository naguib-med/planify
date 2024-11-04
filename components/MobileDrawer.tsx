import Link from 'next/link';
import { X } from 'lucide-react';

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
                <X size={24} />
            </button>
            <ul className="flex flex-col justify-center items-center space-y-4">
                <li className="text-3xl hover:text-hover-text hover:font-semibold">
                    <Link href="/">Accueil</Link>
                </li>
                <li className="text-3xl hover:text-hover-text hover:font-semibold">
                    <Link href="/appointments">Rendez-vous</Link>
                </li>
                <li className="text-3xl hover:text-hover-text hover:font-semibold">
                    <Link href="/about">À propos</Link>
                </li>
            </ul>
        </div>
    );
}


