import { Menu } from 'lucide-react';

type MobileMenuButtonProps = {
    onClick: () => void;
};

export default function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
    return (
        <button className="absolute right-2 top-2 p-2" onClick={onClick}>
            <Menu size={24} />
        </button>
    );
}

