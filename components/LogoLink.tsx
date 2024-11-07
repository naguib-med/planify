import Link from 'next/link';

export default function LogoLink() {
    return (
        <div className="flex items-center">
            <Link href="/">
                <h1 className="cursor-pointer text-5xl font-bold">
                    Planify
                    <span className="text-primary">.</span>
                </h1>
            </Link>
        </div>
    );
}