import Link from 'next/link';
import { Home, Calendar, Info, User } from 'lucide-react';

export default function DesktopNavLinks() {
    return (
        <ul className="absolute right-0 flex flex-row space-x-6">
            <li className="relative text-xl hover:text-primary group flex items-center space-x-2">
                <Link href="/" className="relative flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    <span>Accueil</span>
                    <span
                        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
            <li className="relative text-xl hover:text-primary group flex items-center space-x-2">
                <Link href="/appointments" className="relative flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Rendez-vous</span>
                    <span
                        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
            <li className="relative text-xl hover:text-primary group flex items-center space-x-2">
                <Link href="/about" className="relative flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    <span>À propos</span>
                    <span
                        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
            <li className="relative text-xl hover:text-primary group flex items-center space-x-2">
                <Link href="/profile" className="relative flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>Profil</span>
                    <span
                        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
        </ul>
    );
}
