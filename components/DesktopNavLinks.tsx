import Link from 'next/link';

export default function DesktopNavLinks() {
    return (
        <ul className="absolute right-0 flex flex-row space-x-6">
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
    );
}