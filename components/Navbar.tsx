"use client";
import { useState } from 'react';
import DesktopNavLinks from './DesktopNavLinks';
import LogoLink from './LogoLink';
import MobileDrawer from './MobileDrawer';
import MobileMenuButton from './MobileMenuButton';
import { Section } from './Section';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen((prev) => !prev);
    };

    return (
        <header className="sticky top-0 py-4 z-10">
            <Section>
                <div className="hidden relative py-2 sm:flex flex-col justify-center h-full">
                    <LogoLink />
                    <DesktopNavLinks />
                </div>
                <div className="sm:hidden flex justify-between items-center py-2">
                    <LogoLink />
                    <MobileMenuButton onClick={handleDrawerToggle} />
                    <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
                </div>
            </Section>
        </header>
    );
};

export default Navbar;
