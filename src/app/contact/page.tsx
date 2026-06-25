
export default function Page() {
    return (
        <main>




            <header className="page-hero">
                <div className="fade-up">
                    <h1>Get in Touch</h1>
                    <p>Have questions regarding the nomination process or the training program? Our central focal team is here to assist you.</p>
                </div>
            </header>

            <section className="contact-section">
                <div className="contact-grid">

                    <div className="contact-info slide-left">
                        <h2>Contact Information</h2>
                        <p>Reach out to the official organizing committee for any administrative or application queries.</p>

                        <div className="info-item">
                            <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                            <div className="info-text">
                                <h4>Headquarters</h4>
                                <p>Nawaz Shareef Center of Excellence<br />4 Shahrah Aiwan-e-Sanat-o-Tijarat, G.O.R. - I<br />Lahore, Punjab 54000</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><i className="fas fa-envelope"></i></div>
                            <div className="info-text">
                                <h4>Official Email</h4>
                                <p>thecmpunjabmun@gmail.com<br /></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
                            <div className="info-text">
                                <h4>Help Desk</h4>
                                <p>+92 321 44787532<br />Available Mon-Fri, 9am - 5pm</p>
                            </div>
                        </div>

                        <div className="social-links">

                            <a href="https://www.instagram.com/thecmpunjabmun/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>

                        </div>
                    </div>

                    <div className="contact-form-container slide-right">
                        <h3>Send us a Message</h3>
                        <form id="contactForm" action="#" method="POST">

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" className="form-control" placeholder="Ali" required minLength={2} maxLength={50} pattern="^[A-Za-z\s\-']+$" title="Only letters, spaces, hyphens, and apostrophes are allowed (2-50 characters)" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" className="form-control" placeholder="Khan" required minLength={2} maxLength={50} pattern="^[A-Za-z\s\-']+$" title="Only letters, spaces, hyphens, and apostrophes are allowed (2-50 characters)" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" className="form-control" placeholder="ali.khan@example.com" required pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="district">Your District</label>
                                    <select id="district" className="form-control" required defaultValue="">
                                        <option value="" disabled>Select District</option>
                                        <optgroup label="Lahore Division">
                                            <option value="lahore">Lahore</option>
                                            <option value="sheikhupura">Sheikhupura</option>
                                            <option value="kasur">Kasur</option>
                                            <option value="nankana sahib">Nankana Sahib</option>
                                        </optgroup>
                                        <optgroup label="Gujranwala Division">
                                            <option value="gujranwala">Gujranwala</option>
                                            <option value="gujrat">Gujrat</option>
                                            <option value="hafizabad">Hafizabad</option>
                                            <option value="mandi bahauddin">Mandi Bahauddin</option>
                                            <option value="narowal">Narowal</option>
                                            <option value="sialkot">Sialkot</option>
                                        </optgroup>
                                        <optgroup label="Rawalpindi Division">
                                            <option value="rawalpindi">Rawalpindi</option>
                                            <option value="attock">Attock</option>
                                            <option value="chakwal">Chakwal</option>
                                            <option value="jhelum">Jhelum</option>
                                        </optgroup>
                                        <optgroup label="Faisalabad Division">
                                            <option value="faisalabad">Faisalabad</option>
                                            <option value="chiniot">Chiniot</option>
                                            <option value="jhang">Jhang</option>
                                            <option value="toba tek singh">Toba Tek Singh</option>
                                        </optgroup>
                                        <optgroup label="Multan Division">
                                            <option value="multan">Multan</option>
                                            <option value="khanewal">Khanewal</option>
                                            <option value="lodhran">Lodhran</option>
                                            <option value="vehari">Vehari</option>
                                        </optgroup>
                                        <optgroup label="Sargodha Division">
                                            <option value="sargodha">Sargodha</option>
                                            <option value="bhakkar">Bhakkar</option>
                                            <option value="khushab">Khushab</option>
                                            <option value="mianwali">Mianwali</option>
                                        </optgroup>
                                        <optgroup label="Bahawalpur Division">
                                            <option value="bahawalpur">Bahawalpur</option>
                                            <option value="bahawalnagar">Bahawalnagar</option>
                                            <option value="rahim yar khan">Rahim Yar Khan</option>
                                        </optgroup>
                                        <optgroup label="Sahiwal Division">
                                            <option value="sahiwal">Sahiwal</option>
                                            <option value="okara">Okara</option>
                                            <option value="pakpattan">Pakpattan</option>
                                        </optgroup>
                                        <optgroup label="D.G. Khan Division">
                                            <option value="dera ghazi khan">Dera Ghazi Khan</option>
                                            <option value="layyah">Layyah</option>
                                            <option value="muzaffargarh">Muzaffargarh</option>
                                            <option value="rajanpur">Rajanpur</option>
                                        </optgroup>
                                        <option value="other">Other / Not Listed</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" className="form-control" placeholder="E.g. Application Status Inquiry" required minLength={5} maxLength={100} pattern="^[\w\s.,?!'-]+$" title="Subject must be 5-100 characters and contain no special symbols" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" className="form-control" placeholder="Type your message here..." required minLength={20} maxLength={2000} title="Message must be at least 20 characters long"></textarea>
                            </div>

                            <button type="submit" className="btn-submit">Send Message <i className="fas fa-paper-plane"></i></button>
                        </form>
                    </div>

                </div>
            </section>

            <section className="faq-section">
                <div className="fade-up">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-grid">
                    <div className="faq-card fade-up" style={{ animationDelay: '0.1s' }}>
                        <h4>When is the final deadline?</h4>
                        <p>The final date for the District Coordinator nomination submission is May 9, 2026, strictly by 11:59 PM.</p>
                    </div>
                    <div className="faq-card fade-up" style={{ animationDelay: '0.2s' }}>
                        <h4>Do I need previous MUN experience?</h4>
                        <p>While strong communication and leadership skills are required, active involvement in MUNs or debating societies is highly preferred but not strictly mandatory.</p>
                    </div>
                    <div className="faq-card fade-up" style={{ animationDelay: '0.3s' }}>
                        <h4>Will travel expenses be covered?</h4>
                        <p>No, the position is purely honorary/voluntary. No Travel Allowance (TA) or Daily Allowance (DA) shall be admissible.</p>
                    </div>
                    <div className="faq-card fade-up" style={{ animationDelay: '0.4s' }}>
                        <h4>Can I apply for a different district?</h4>
                        <p>No, applicants must strictly be a resident of the respective district they are applying to coordinate.</p>
                    </div>
                </div>
            </section>

            {/* Custom Alert Overlay */}




            {/*  */}


        </main>
    );
}
