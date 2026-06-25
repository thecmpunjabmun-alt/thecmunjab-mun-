"use client";

export default function Leadership() {
    return (
        <main>
            <header className="page-hero">
                <div className="fade-up">
                    <h1>Leadership Directory</h1>
                    <p>Meet the officers steering the CM Punjab Model United Nations, from the executive office to every operational department.</p>
                </div>
            </header>

            <section className="directory-section">
                <div className="section-header fade-up">
                    <span className="section-badge">Executive</span>
                    <h2>Executive Leadership</h2>
                    <p>The executive office steering the vision and operations of the initiative.</p>
                </div>

                <div className="directory-row">
                    <div className="leader-card fade-up">
                        <img src="/rooman-saadat.webp" alt="Muhammad Rooman Saadat" className="leader-photo"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Muhammad+Rooman+Saadat&background=random&size=150'; }} />
                        <h3>Muhammad Rooman Saadat</h3>
                        <span className="leader-role">Director/President & CEO</span>
                    </div>
                </div>
            </section>

            <section className="directory-section">
                <div className="section-header fade-up">
                    <span className="section-badge">Departments</span>
                    <h2>Departmental Leadership</h2>
                    <p>Each office is led by a Chief Officer, supported by a dedicated team of deputies.</p>
                </div>

                <div className="directory-row">
                    <div className="leader-card fade-up">
                        <span className="office-name">Office of Operations</span>
                        <img src="/noor-fatima.webp" alt="Noor Fatima" className="leader-photo"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Noor+Fatima&background=random&size=150'; }} />
                        <h3>Noor Fatima</h3>
                        <span className="leader-role">Chief Operating Officer</span>
                        <div className="deputy-list">
                            <span className="deputy-list-title">Deputy Officers</span>
                            <ul>
                                <li><span className="deputy-name">To Be Announced</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="leader-card fade-up">
                        <span className="office-name">Office of Academic Affairs</span>
                        <img src="/ahmed-ikram.webp" alt="Ahmed Ikram" className="leader-photo"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ahmed+Ikram&background=random&size=150'; }} />
                        <h3>Ahmed Ikram</h3>
                        <span className="leader-role">Chief Academic Officer</span>
                        <div className="deputy-list">
                            <span className="deputy-list-title">Deputy Officers</span>
                            <ul>
                                <li><span className="deputy-name">M. Faseeh Ur Rehman </span></li>
                                <li><span className="deputy-name">Ayesha Umair</span></li>
                                <li><span className="deputy-name">Natalya Rahman</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="leader-card fade-up">
                        <span className="office-name">Office of Coordination</span>
                        <img src="/rehan-abid.webp" alt="Rehan Abid" className="leader-photo"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Rehan+Abid&background=random&size=150'; }} />
                        <h3>Rehan Abid</h3>
                        <span className="leader-role">Chief Officer</span>
                        <div className="deputy-list">
                            <span className="deputy-list-title">Deputy Officers</span>
                            <ul>
                                <li><span className="deputy-name">Ibrahim</span></li>
                                <li><span className="deputy-name">Balaj Raja</span></li>
                                <li><span className="deputy-name">Shaheer Abdullah</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="leader-card fade-up">
                        <span className="office-name">Office of Human Resource</span>
                        <img src="/arfa-afzal.webp" alt="Arfa Afzal" className="leader-photo"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Arfa+Afzal&background=random&size=150'; }} />
                        <h3>Arfa Afzal</h3>
                        <span className="leader-role">Chief Officer</span>
                        <div className="deputy-list">
                            <span className="deputy-list-title">Deputy Officers</span>
                            <ul>
                                <li><span className="deputy-name">Abdu Rafay</span></li>
                                <li><span className="deputy-name">Ibrahim Lodhi</span></li>
                                <li><span className="deputy-name">Aadam Izhar Khan</span></li>
                                <li><span className="deputy-name">Adeen Javaid</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="leader-card fade-up">
                        <span className="office-name">Office of Media and IT</span>
                        <img src="/muhammad-ahmed-hussain.webp" alt="M. Ahmed Hussain" className="leader-photo"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=M+Ahmed+Hussain&background=random&size=150'; }} />
                        <h3>M. Ahmed Hussain</h3>
                        <span className="leader-role">Chief Media Officer</span>
                        <div className="deputy-list">
                            <span className="deputy-list-title">Deputy Officers</span>
                            <ul>
                                <li><span className="deputy-name">Muhammad Ahmad Khalid</span></li>
                                <li><span className="deputy-name">Faiq Subhani</span></li>
                                <li><span className="deputy-name">Muhammad Ibraheem Tarrar</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="leader-card fade-up">
                        <span className="office-name">Office of Outreach</span>
                        <img src="/m-tehfiz-hasan.webp" alt="M. Tehfiz Hasan" className="leader-photo"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=M+Tehfiz+Hasan&background=random&size=150'; }} />
                        <h3>M. Tehfiz Hasan</h3>
                        <span className="leader-role">Chief Officer</span>
                        <div className="deputy-list">
                            <span className="deputy-list-title">Deputy Officers</span>
                            <ul>
                                <li><span className="deputy-name">Raania Malik</span></li>
                                <li><span className="deputy-name">Abdullah Ahmed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
