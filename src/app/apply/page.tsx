
export default function Page() {
    return (
        <main>




            <header className="page-hero">
                <div className="fade-up">
                    <h1>Participant Candidate Application</h1>
                    <p>Apply to participate as an official delegate in the CM Punjab MUN Training Program.</p>
                </div>
            </header>

            <section className="form-section">
                <form id="nominationForm" action="#" method="POST">

                    <div className="form-card fade-up" style={{ animationDelay: '0.1s' }}>
                        <h2><i className="fas fa-user-circle"></i> 1. Personal Identity</h2>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Legal Name <span>*</span></label>
                                <input type="text" id="fullName" className="form-control" placeholder="As per CNIC/B-Form" required pattern="^[A-Za-z\s]{3,50}$" title="Please enter a valid name using only letters (3-50 characters)." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cnic">CNIC / B-Form Number <span>*</span></label>
                                <input type="text" id="cnic" className="form-control" placeholder="00000-0000000-0" maxLength={15} required />
                                <span className="help-text">Auto-formats with dashes</span>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="gender">Gender <span>*</span></label>
                                <select id="gender" className="form-control" required defaultValue="">
                                    <option value="" disabled>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dob">Date of Birth <span>*</span></label>
                                <input type="date" id="dob" className="form-control" required />
                                <span className="help-text">Must be at least 14 years old.</span>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email Address <span>*</span></label>
                                <input type="email" id="email" className="form-control" placeholder="youremail@domain.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number (WhatsApp) <span>*</span></label>
                                <input type="tel" id="phone" className="form-control" placeholder="03XX-XXXXXXX" maxLength={12} required />
                            </div>
                        </div>
                    </div>

                    <div className="form-card fade-up" style={{ animationDelay: '0.2s' }}>
                        <h2><i className="fas fa-map-marker-alt"></i> 2. District & Affiliation</h2>

                        <div className="form-row">
                            <div className="form-group full-width">
                                <label htmlFor="district">District Applying From <span>*</span></label>
                                <select id="district" className="form-control" required defaultValue="">
                                    <option value="" disabled>Select your official district of residence</option>
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
                                    <option value="other">Other (Will require review)</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="institution">Current Educational Institution <span>*</span></label>
                                <input type="text" id="institution" className="form-control" placeholder="E.g. University of the Punjab" required minLength={5} pattern="^[A-Za-z0-9\s\.,&'-]{5,100}$" title="Please enter a valid institution name (min 5 characters)." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="degree">Degree / Grade Level <span>*</span></label>
                                <input type="text" id="degree" className="form-control" placeholder="E.g. BS Computer Science (2nd Semester)" required minLength={3} title="Please enter a valid degree or grade level." />
                            </div>
                        </div>
                    </div>

                    <div className="form-card fade-up" style={{ animationDelay: '0.3s' }}>
                        <h2><i className="fas fa-briefcase"></i> 3. Experience & Motivation</h2>

                        <div className="form-group full-width">
                            <label htmlFor="experience">Previous MUN / Debating Experience</label>
                            <textarea id="experience" className="form-control" placeholder="List any previous MUNs you have attended, your roles (Delegate, Chair, Organizer), or any leadership positions you hold..."></textarea>
                            <span className="help-text">Optional, but highly preferred by the selection committee.</span>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="motivation">Why do you want to participate as a delegate in CM Punjab MUN? <span>*</span></label>
                            <textarea id="motivation" className="form-control" placeholder="Briefly explain why you want to attend and what you hope to learn..." required minLength={50} title="Please provide a thoughtful answer (minimum 50 characters)."></textarea>
                            <span className="help-text">Minimum 50 characters required.</span>
                        </div>
                    </div>

                    <div className="form-card fade-up" style={{ animationDelay: '0.4s' }}>
                        <h2><i className="fas fa-shield-alt"></i> 4. Verification & Consent</h2>

                        <p>Please verify you are human and agree to the data privacy terms to submit your application securely.</p>

                        <div className="form-group">
                            <div className="recaptcha-mock" id="mockCaptcha">
                                <div className="rc-checkbox" id="rcCheck">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="rc-text">I&apos;m not a robot</div>
                                <div className="rc-logo">
                                    <i className="fas fa-sync"></i>
                                    <p>reCAPTCHA<br />Privacy - Terms</p>
                                </div>
                            </div>
                            <input type="hidden" id="captchaVerified" required />
                        </div>

                        <div className="terms-group">
                            <input type="checkbox" id="termsConsent" required />
                            <label htmlFor="termsConsent">
                                I hereby declare that the information provided above is true and correct to the best of my knowledge. I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                            </label>
                        </div>

                        <button type="submit" className="btn-submit" id="submitBtn">Submit Secure Application</button>
                    </div>

                </form>
            </section>





            {/*  */}


        </main>
    );
}
