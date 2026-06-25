
export default function Page() {
    return (
        <main>
            

    

    <header className="about-hero">
        <div className="fade-up">
            <h1>About The Program</h1>
            <p>Empowering the youth of Punjab through diplomacy, leadership, and policy-making at the highest provincial level.</p>
        </div>
    </header>

    <section className="mission-section">
        <div className="mission-grid">
            <div className="mission-content slide-left">
                <h2>Our Mission & Vision</h2>
                
                <h3>Mission</h3>
                <p>To unlock the hidden potential of youth across Punjab by giving them voice, confidence, and direction through structured training and meaningful engagement.</p>
                
                <p>We aim to:</p>
                <ul>
                    <li>Bridge the gap between private and government students</li>
                    <li>Give every student a chance to be heard</li>
                    <li>Build confidence through communication and diplomacy</li>
                    <li>Turn classrooms into spaces of leadership and thinking</li>
                    <li>Prepare youth not just for exams, but for life</li>
                </ul>

                <h3>Vision</h3>
                <p>To create a Punjab where every student, regardless of background, stands on equal ground — with equal access to confidence, opportunity, and platforms that shape future leaders.</p>
                <p>A future where students from government institutions learn, grow, and lead not divided by systems, but united by ambition.</p>
            </div>
            <div className="mission-image slide-right">
                <img src="officals.webp" alt="MUN Session" loading="lazy" />
            </div>
        </div>
    </section>

    <section className="initiative-components" id="components">
        <div className="section-header fade-up">
            <span className="section-badge">Program Structure</span>
            <h2>The CM Punjab MUN Initiative</h2>
            <p>A province-wide program promoting leadership, diplomacy, and academic engagement among students across Punjab. It features two core components:</p>
        </div>

        <div className="components-grid">
            
            <div className="component-card fade-up">
                <h3><i className="fas fa-book-reader"></i> MUN Training Program</h3>
                <p>A capacity-building program for students in public schools, colleges, and universities.</p>
                
                <h4>Key Features:</h4>
                <ul>
                    <li>Public speaking and debate training</li>
                    <li>Research and policy writing</li>
                    <li>Diplomacy and negotiation skills</li>
                    <li>Leadership development sessions</li>
                    <li>Exposure to global issues</li>
                </ul>

                <h4>Objectives:</h4>
                <ul>
                    <li>Prepare students for MUN conferences</li>
                    <li>Build critical thinking and confidence</li>
                    <li>Encourage teamwork and collaboration</li>
                    <li>Provide quality learning opportunities</li>
                </ul>
            </div>

            <div className="component-card fade-up">
                <h3><i className="fas fa-globe-americas"></i> MUN Conference</h3>
                <p>A joint simulation platform where public and private students engage in Model United Nations.</p>
                
                <h4>Highlights:</h4>
                <ul>
                    <li>UN-style committee sessions</li>
                    <li>Debates on global and national issues</li>
                    <li>Interaction between public & private students</li>
                    <li>Networking opportunities</li>
                    <li>Awards for top delegates</li>
                </ul>

                <h4>Goals:</h4>
                <ul>
                    <li>Promote inclusive participation</li>
                    <li>Encourage healthy competition</li>
                    <li>Strengthen leadership and communication</li>
                    <li>Inspire future leaders and policymakers</li>
                </ul>
            </div>
        </div>
    </section>

    <section className="values-section">
        <div className="fade-up">
            <h2>Our Core Values</h2>
        </div>
        <div className="values-grid">
            <div className="value-card fade-up">
                <i className="fas fa-handshake"></i>
                <h3>Diplomacy</h3>
                <p>Fostering mutual respect, active listening, and the ability to find common ground in complex situations.</p>
            </div>
            <div className="value-card fade-up">
                <i className="fas fa-lightbulb"></i>
                <h3>Innovation</h3>
                <p>Encouraging modern solutions to traditional problems through youth-driven policy drafting.</p>
            </div>
            <div className="value-card fade-up">
                <i className="fas fa-users"></i>
                <h3>Inclusivity</h3>
                <p>Ensuring representation from every district in Punjab, giving a voice to diverse backgrounds.</p>
            </div>
            <div className="value-card fade-up">
                <i className="fas fa-globe-asia"></i>
                <h3>Global Awareness</h3>
                <p>Connecting local provincial issues to broader international relations and UN Sustainable Development Goals.</p>
            </div>
        </div>
    </section>

    <section className="leadership-section">
        <div className="leadership-grid fade-up">
            <div className="leadership-image">
                <img src="officals.webp" alt="Leadership" loading="lazy" />
            </div>
            <div className="leadership-text">
                <i className="fas fa-quote-left quote-icon"></i>
                <h3>A Vision for the Youth</h3>
                <h4>Official Message</h4>
                <p>"The youth of Punjab are our greatest asset. Through this Model United Nations, we are opening the doors of governance, debate, and leadership to the brilliant minds across all our districts. This is your platform to step up, speak out, and shape the future of our province and our nation."</p>
            </div>
        </div>
    </section>

    

    

    

        </main>
    );
}
