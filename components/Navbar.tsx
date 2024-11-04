"use client";
import { useState } from 'react';
import DesktopNavLinks from './DesktopNavLinks';
import LogoLink from './LogoLink';
import MobileDrawer from './MobileDrawer';
import MobileMenuButton from './MobileMenuButton';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <div className="bg-primary text-primary-foreground px-8">
            <div className="hidden relative py-6 sm:flex flex-col justify-center">
                <LogoLink/>
                <DesktopNavLinks/>
            </div>
            <div className="sm:hidden relative flex flex-row my-4">
                <LogoLink/>
                <MobileMenuButton onClick={handleDrawerToggle}/>
                <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle}/>
            </div>
        </div>
    );
};

export default Navbar;
