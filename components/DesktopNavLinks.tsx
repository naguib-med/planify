import Link from 'next/link';

export default function DesktopNavLinks() {
    return (
        <ul className="absolute right-0 flex flex-row space-x-6">
            <li className="relative text-xl hover:text-primary group">
                <Link href="/" className="relative">
                    Accueil
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
            <li className="relative text-xl hover:text-primary group">
                <Link href="/appointments" className="relative">
                    Rendez-vous
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
            <li className="relative text-xl hover:text-primary group">
                <Link href="/about" className="relative">
                    À propos
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
        </ul>
    );
}
