import Preloader from '../components/Preloader';

export default function Page() {
    return (
        <main>
            <Preloader />
            <section className="hero" id="home">
                <div className="hero-content fade-up">
                    <span className="badge">Chief Minister Punjab Model United Nations</span>
                    <h1>A VISION FOR <br /><span className="italic-text">YOUTH EMPOWERMENT</span></h1>
                    <p className="hero-desc">Bridging the gap between academic learning and real-world policymaking for the future leaders of Punjab.</p>

                    <div className="btn-group">
                        <a href="#messages" className="btn-primary">Leadership Messages</a>
                        <a href="#initiative" className="btn-outline">Discover Initiative</a>
                    </div>
                </div>

                <div className="hero-image slide-right">
                    <img src="hero-banner.webp" alt="Government Building" />
                </div>
            </section>

            <section className="leadership-messages" id="messages">
                <div className="messages-grid">
                    <div className="note-card fade-up">
                        <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                        <p className="quote">"Youth are the architects of our future. Through platforms like CM Punjab MUN, we are
                            empowering our young leaders to debate, ideate, and shape the policies of tomorrow. Punjab believes
                            in your immense potential."</p>
                        <div className="author-profile">
                            <div className="author-info">
                                <strong>Maryam Nawaz Sharif</strong>
                                <span>Chief Minister, Punjab</span>
                            </div>
                        </div>
                    </div>

                    <div className="note-card fade-up" style={{ animationDelay: "0.2s" }}>
                        <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                        <p className="quote">"Education goes beyond textbooks. It is about leadership, diplomacy, and collaborative
                            problem-solving. This initiative aims to cultivate these essential skills in the youth of our
                            province."</p>
                        <div className="author-profile">
                            <div className="author-info">
                                <strong>Rana Sikandar Hayat</strong>
                                <span>Minister of Education, Punjab</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="initiative-overview" id="initiative">
                <div className="section-header fade-up">
                    <span className="section-badge">The Initiative</span>
                    <h2>CM Punjab MUN Program</h2>
                    <p>A province-wide program promoting leadership, diplomacy, and academic engagement.</p>
                </div>
                
                <div className="features-grid">
                    <div className="feature-card fade-up">
                        <div className="feature-icon"><i className="fas fa-book-reader" aria-hidden="true"></i></div>
                        <h3>MUN Training Program</h3>
                        <p>Skill development and capacity building for public institution students.</p>
                        <a href="/about#components" className="read-more">Learn More <i className="fas fa-angle-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="feature-card fade-up">
                        <div className="feature-icon"><i className="fas fa-globe-americas" aria-hidden="true"></i></div>
                        <h3>MUN Conference</h3>
                        <p>A joint simulation platform for public and private students to engage in debate.</p>
                        <a href="/about#components" className="read-more">Learn More <i className="fas fa-angle-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </section>

            <section className="stats-section" id="about">
                <div className="stats-grid">
                    <div className="info-image slide-left">
                        <img src="about-session.webp" alt="MUN Session" loading="lazy" />
                    </div>
                    
                    <div className="info-text fade-up">
                        <span className="video-badge">Since 2026</span>
                        <h2>Pakistan's First Ever Government MUN in Punjab</h2>
                        <p>The Chief Minister Punjab Model United Nations is a premier youth empowerment and leadership training program. It is designed to cultivate the next generation of leaders by providing a platform for constructive debate and policy-making.</p>
                        
                        <div id="eligibility">
                            <h3>Eligibility Highlights</h3>
                            <ul className="eligibility-list">
                                <li><i className="fas fa-check-circle"></i> Strong communication, leadership, and organizational skills.</li>
                                <li><i className="fas fa-check-circle"></i> Active involvement in MUNs or debating societies preferred.</li>
                                <li><i className="fas fa-check-circle"></i> Must be a resident of the respective district.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            <section className="faq-section" id="faq">
                <div className="faq-header fade-up">
                    <h2>Frequently Asked Questions</h2>
                    <p>Find answers to common questions about the CM Punjab MUN program.</p>
                </div>
                <div className="faq-container fade-up">
                    <div className="faq-item">
                        <div className="faq-question">
                            <span>What is CM Punjab Model United Nations?</span>
                            <i className="fas fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div className="faq-answer">
                            <p>CM Punjab MUN is Pakistan's premier youth empowerment and leadership training program designed to cultivate the next generation of leaders by providing a platform for constructive debate and policy-making.</p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            <span>Who can apply for District Coordinator position?</span>
                            <i className="fas fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div className="faq-answer">
                            <p>Candidates must have strong communication and leadership skills, active involvement in MUNs or debating societies, and must be a resident of the respective district. Submit your application before the deadline with all required documents.</p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            <span>What are the key responsibilities of a District Coordinator?</span>
                            <i className="fas fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div className="faq-answer">
                            <p>District Coordinators are responsible for district outreach, organizing and promoting CM Punjab MUN activities, coordinating with educational institutions, managing event logistics, and engaging with participants at the district level.</p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            <span>Is the District Coordinator nomination still open?</span>
                            <i className="fas fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div className="faq-answer">
                            <p>No, the District Coordinator nominations are officially closed following an overwhelming response of 700+ applications. However, Participant Candidate applications are currently open.</p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            <span>How will selected coordinators be notified?</span>
                            <i className="fas fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div className="faq-answer">
                            <p>Selected candidates will be notified via email and phone number provided during application. We will also publish the list of selected District Coordinators on our official website and social media channels.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
