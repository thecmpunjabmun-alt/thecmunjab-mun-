'use client';


export default function CoreTeam() {
    return (
        <main>
            <header className="page-hero">
                <div className="fade-up">
                    <h1>Governing Body</h1>
                    <p>Meet the distinguished Patronage and Board of Directors guiding the CM Punjab Model United Nations initiative towards excellence.</p>
                </div>
            </header>

            <section className="directory-section">
                <div className="section-header fade-up">
                    <span className="section-badge">Executive Leadership</span>
                    <h2>Guiding the Vision</h2>
                    <p>The esteemed leaders shaping the future of youth empowerment in Punjab.</p>
                </div>

                <h2 className="board-category-title">Patronage</h2>
                <div className="directory-row">
                    <div className="leader-card fade-up">
                        <img
                            src="/maryam-nawaz.webp"
                            alt="Maryam Nawaz Sharif"
                            className="leader-photo"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Maryam+Nawaz+Sharif&background=random&size=150' }}
                        />
                        <h3>Maryam Nawaz Sharif</h3>
                        <span className="leader-role">Patron-in-Chief</span>
                    </div>
                    <div className="leader-card fade-up">
                        <img
                            src="/rana-sikandar.webp"
                            alt="Rana Sikandar Hayat"
                            className="leader-photo"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Rana+Sikandar+Hayat&background=random&size=150' }}
                        />
                        <h3>Rana Sikandar Hayat</h3>
                        <span className="leader-role">Chief Patron</span>
                    </div>
                </div>

                <h2 className="board-category-title">Board of Directors</h2>
                <div className="directory-row">
                    <div className="leader-card fade-up">
                        <img
                            src="/usama-bashir.webp"
                            alt="Usama Bashir"
                            className="leader-photo"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Usama+Bashir&background=random&size=150' }}
                        />
                        <h3>Usama Bashir</h3>
                        <span className="leader-role">Chairman Board of Directors</span>
                    </div>
                    <div className="leader-card fade-up">
                        <img
                            src="/rooman-saadat.webp"
                            alt="Muhammad Rooman Saadat"
                            className="leader-photo"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Muhammad+Rooman+Saadat&background=random&size=150' }}
                        />
                        <h3>Muhammad Rooman Saadat</h3>
                        <span className="leader-role">Director/President & CEO</span>
                    </div>

                </div>
            </section>
        </main>
    );
}
