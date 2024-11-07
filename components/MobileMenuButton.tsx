import { Menu } from 'lucide-react';

type MobileMenuButtonProps = {
    onClick: () => void;
};

export default function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
    return (
        <button className="absolute right-0 p-2" onClick={onClick}>
            <Menu size={32} />
        </button>
    );
}

