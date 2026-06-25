'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const closeMenu = () => setIsOpen(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const nav = document.querySelector('.navbar');
            if (nav && !nav.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/core-team', label: 'Our Governing Body' },
        { href: '/leadership', label: 'Leadership' },
        { href: '/provincial-team', label: 'Provincial Team' },
        { href: '/contact', label: 'Contact Us' },
    ];

    return (
        <nav className="navbar">
            <div className="logo">
                <Link href="/"><img src="/logo-Photoroom.webp" alt="CM Punjab MUN Logo" className="nav-logo" /></Link>
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="navLinks">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={pathname === link.href ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
            </div>
        </nav>
    );
}
