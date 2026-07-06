'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [modalConfig, setModalConfig] = useState<{isOpen: boolean, type: 'terms' | 'privacy' | null}>({isOpen: false, type: null});

    const handleDownload = () => {
        if (!modalConfig.type) return;
        const filename = modalConfig.type === 'terms' ? 'terms-condition.pdf' : 'privacy-policy.pdf';
        
        const a = document.createElement('a');
        a.href = '/' + filename;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        setModalConfig({isOpen: false, type: null});
    };

    return (
        <>
            <footer id="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>About CM Punjab MUN</h4>
                        <p>Pakistan's first ever government Model United Nations program designed to empower and develop youth leaders.</p>
                        <div className="social-icons fade-up">
                            <a href="https://www.instagram.com/thecmpunjabmun?igsh=MXJ5MzNnb2tla25pNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/core-team">Our Governing Body</Link></li>
                            <li><Link href="/leadership">Leadership</Link></li>
                            <li><Link href="/provincial-team">Provincial Team</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#" onClick={(e) => {
                                e.preventDefault();
                                setModalConfig({isOpen: true, type: 'terms'});
                            }}>Terms & Conditions</a></li>
                            <li><a href="#" onClick={(e) => {
                                e.preventDefault();
                                setModalConfig({isOpen: true, type: 'privacy'});
                            }}>Privacy Policy</a></li>
                            <li><Link href="/#faq">FAQ</Link></li>
                            <li><Link href="/contact">Support</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <p>
                            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                            <a href="https://maps.google.com/?q=4+Shahrah+Aiwan-e-Sanat-o-Tijarat,+G.O.R.+-+I,+Lahore,+54000" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                4 Shahrah Aiwan-e-Sanat-o-Tijarat, G.O.R. - I, Lahore, 54000
                            </a>
                        </p>
                        <p>
                            <i className="fas fa-phone" aria-hidden="true"></i>
                            <a href="tel:+9232144787532" style={{ color: 'inherit', textDecoration: 'none' }}>+92 321 44787532</a>
                        </p>
                        <p>
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                            <a href="mailto:thecmpunjabmun@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>thecmpunjabmun@gmail.com</a>
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 CM Punjab Model United Nations. All rights reserved. | Turning Ambitions into Achievements</p>
                </div>
            </footer>

            {/* Custom Download Modal */}
            {modalConfig.isOpen && (
                <div className="custom-modal-overlay fade-in" onClick={() => setModalConfig({isOpen: false, type: null})}>
                    <div className="custom-modal zoom-in" onClick={e => e.stopPropagation()}>
                        <div className="custom-modal-icon">
                            <i className="fas fa-file-download"></i>
                        </div>
                        <h3>Download {modalConfig.type === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}?</h3>
                        <p>Are you sure you want to download the {modalConfig.type === 'terms' ? 'Terms and Conditions' : 'Privacy Policy'} document to your device?</p>
                        <div className="custom-modal-actions">
                            <button className="btn-modal-cancel" onClick={() => setModalConfig({isOpen: false, type: null})}>Cancel</button>
                            <button className="btn-primary" onClick={handleDownload}>Download</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
