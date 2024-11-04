import Link from 'next/link';
import Image from 'next/image';
import planify_logo from '../public/planify_logo.webp';

export default function LogoLink() {
    return (
        <div className="flex items-center">
            <Link href="/">
               <Image src={planify_logo } alt="logo" className="cursor-pointer rounded-full h-12 w-12 sm:h-20 sm:w-20" />
            </Link>
        </div>
    );
}