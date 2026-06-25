"use client";

import { useState } from 'react';

export default function ProvincialTeam() {
    const [modalData, setModalData] = useState<{
        division: string,
        district: string,
        divCoordinators: string[],
        distCoordinators: string[]
    } | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const divisionsData = [
        {
            name: "Rawalpindi Division",
            divisionalCoordinators: ["Mr. Shayan Abbasi", "Ms. Abeer Tahir"],
            districts: [
                { name: "Rawalpindi", coordinators: ["Mr. Shayyan Abbasi", "Ms. Aroush Adnan"] },
                { name: "Murree", coordinators: ["Mr. Wajhi ur Rehman", "Ms. Manahil Khalid"] },
                { name: "Attock", coordinators: ["Ms. Samreen Baig", "Mr. Ahmed Amir"] },
                { name: "Jhelum", coordinators: ["Mr. Jawad Raja", "Ms. Kashaf Maqsood"] },
                { name: "Chakwal", coordinators: [] },
                { name: "Talagang", coordinators: ["Mr. Noor ul Hassan"] }
            ]
        },
        {
            name: "Gujrat Division",
            divisionalCoordinators: ["Ms. Zuhaa Rafaqat", "Mr. Ibrahim Kayani"],
            districts: [
                { name: "Gujrat", coordinators: ["Mr. Abdullah Munir", "Mr. Muhammad Asim"] },
                { name: "Hafizabad", coordinators: ["Mr. Muhammad Kamran", "Mr. Ahmad Ahsan"] },
                { name: "Mandi Bahauddin", coordinators: ["Ms. Maryam Kousar", "Mr. Abdul Rafay Anwar"] }
            ]
        },
        {
            name: "Gujranwala Division",
            divisionalCoordinators: ["Mr. Dayab Maqsood", "Ms. Eman Fatima"],
            districts: [
                { name: "Gujranwala", coordinators: ["Mr. Mirza Ahmed Sajjid", "Ms. Hurram Rasheed"] },
                { name: "Sialkot", coordinators: ["Mr. Saad Hamid", "Ms. Ruhma Zainab"] },
                { name: "Narowal", coordinators: ["Mr. Junaid Jameel"] },
                { name: "Wazirabad", coordinators: ["Mr. Yahya Habin", "Ms. Aaila Iftikhar"] }
            ]
        },
        {
            name: "Lahore Division",
            divisionalCoordinators: ["Mr. Hilal Zohaib", "Ms. Maryam Arshad"],
            districts: [
                { name: "Lahore", coordinators: ["Mr. Abdur Rehman Imran", "Ms. Aminah Irfan"] },
                { name: "Sheikhupura", coordinators: ["Ms. Muskan Basharat", "Mr. Muhammad Daud"] },
                { name: "Kasur", coordinators: ["Mr. Muneed ur Rehman", "Ms. Kashaf ul Emaan"] },
                { name: "Nankana Sahib", coordinators: [] }
            ]
        },
        {
            name: "Faisalabad Division",
            divisionalCoordinators: ["Mr. Umais Alam", "Ms. Iqra Sarwar"],
            districts: [
                { name: "Faisalabad", coordinators: ["Mr. Muhammad", "Ms. Amna Naseer"] },
                { name: "Chiniot", coordinators: ["Mr. Saad Sajjad", "Ms. Fatima Malik"] },
                { name: "Jhang", coordinators: ["Mr. Ammar Hur", "Ms. Wania Mohsin"] },
                { name: "Toba Tek Singh", coordinators: ["Mr. Anees Ahmed", "Ms. Hafsa Asif"] }
            ]
        },
        {
            name: "Sargodha Division",
            divisionalCoordinators: ["Ms. Fatima Zahra", "Mr. Husnain Abrar"],
            districts: [
                { name: "Sargodha", coordinators: ["Ms. Yusairah", "Mr. Anas Amjad"] },
                { name: "Mianwali", coordinators: ["Mr. M. Ilyas Shah", "Ms. Ammara Zaka"] },
                { name: "Khushab", coordinators: ["Mr. Abdul Hadi", "Ms. Hafsa Irfan"] },
                { name: "Bhakkar", coordinators: ["Mr. Abdullah Azhar", "Ms. Inshal Haider"] }
            ]
        },
        {
            name: "Sahiwal Division",
            divisionalCoordinators: ["Mr. Ibrahim Sardar", "Ms. Areeba Abdullah"],
            districts: [
                { name: "Sahiwal", coordinators: ["Ms. Maheen Ishtiaq", "Mr. Asfand Faisal"] },
                { name: "Okara", coordinators: ["Mr. Awais Arshad", "Ms. Areena Abdullah"] },
                { name: "Pakpattan", coordinators: ["Mr. Marsad Zaman", "Ms. Emaan Safdar"] }
            ]
        },
        {
            name: "Multan Division",
            divisionalCoordinators: ["Mr. Safwan Ul Haq", "Ms. Shanzay Khan Tareen"],
            districts: [
                { name: "Multan", coordinators: ["Ms. Zeemal Zahra", "Ms. Shanzay Tareen"] },
                { name: "Khanewal", coordinators: ["Mr. Iqbal Khan", "Ms. Zainab Awais"] },
                { name: "Vehari", coordinators: ["Ms. Amina Saeed", "Mr. Fareed Akram"] },
                { name: "Lodhran", coordinators: ["Ms. Alisha Tabassum", "Mr. Abdul Rafay Qureshi"] }
            ]
        },
        {
            name: "Bahawalpur Division",
            divisionalCoordinators: ["Mr. Hassan Khan Langah", "Ms. Memona Emman"],
            districts: [
                { name: "Bahawalpur", coordinators: ["Mr. Hassan Khan Langah", "Ms. Memona Emman"] },
                { name: "Bahawalnagar", coordinators: ["Mr. Huzaifa Waqas", "Ms. Hadiqa Khalid"] },
                { name: "Rahim Yar Khan", coordinators: ["Mr. Talha Shahid", "Ms. Quratulain Aina"] }
            ]
        },
        {
            name: "D.G. Khan Division",
            divisionalCoordinators: ["Mr. Muhammad Farooq", "Ms. Laiba Kulsoom"],
            districts: [
                { name: "Dera Ghazi Khan", coordinators: ["Mr. Muhammad Farooq", "Ms. Laiba Kulsoom"] },
                { name: "Layyah", coordinators: ["Mr. Shehryar Zameer", "Ms. Ayesha Saeed"] },
                { name: "Muzaffargarh", coordinators: ["Mr. Imran Rafiq", "Ms. Aina Aslam"] },
                { name: "Rajanpur", coordinators: [] }
            ]
        }
    ];

    const openModal = (divisionName: string, districtData: any) => {
        const division = divisionsData.find(d => d.name === divisionName);
        setModalData({
            division: divisionName,
            district: districtData.name,
            divCoordinators: division?.divisionalCoordinators || [],
            distCoordinators: districtData.coordinators
        });
    };

    const closeModal = () => {
        setModalData(null);
    };

    const filteredDivisions = divisionsData.map(division => {
        const query = searchQuery.toLowerCase();

        if (division.name.toLowerCase().includes(query)) return division;

        const hasDivCoord = division.divisionalCoordinators.some(c => c.toLowerCase().includes(query));
        if (hasDivCoord) return division;

        const filteredDistricts = division.districts.filter(dist => {
            const matchDistName = dist.name.toLowerCase().includes(query);
            const matchCoordName = dist.coordinators.some(c => c.toLowerCase().includes(query));
            return matchDistName || matchCoordName;
        });

        if (filteredDistricts.length > 0) {
            return { ...division, districts: filteredDistricts };
        }
        return null;
    }).filter(Boolean);

    return (
        <main>
            <header className="page-hero">
                <div className="fade-up">
                    <h1>Provincial Team Directory</h1>
                    <p>Search for a district or coordinator name to view our team.</p>
                </div>
            </header>

            <section className="search-section">
                <div className="search-container fade-up" style={{ animationDelay: "0.2s" }}>
                    <i className="fas fa-search"></i>
                    <input type="text" className="search-input"
                        placeholder="Search by district name or person name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </section>

            <section className="districts-section">
                <div className="divisions-grid">
                    {filteredDivisions.map((division, index) => (
                        <div key={index} className="division-card fade-up">
                            <div className="division-header">
                                <div className="division-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <h2>{division?.name}</h2>
                            </div>
                            <div className="district-tags">
                                {division?.districts.map((district, dIndex) => (
                                    <span
                                        key={dIndex}
                                        className="district-tag"
                                        onClick={() => openModal(division!.name, district)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {district.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                    {filteredDivisions.length === 0 && (
                        <div className="no-results" style={{ display: 'block' }}>
                            <i className="fas fa-search"></i>
                            <h3>Sorry, no results found.</h3>
                            <p>Try searching for a different district or coordinator name.</p>
                        </div>
                    )}
                </div>
            </section>

            <div className={`coordinator-modal-overlay ${modalData ? 'active' : ''}`} style={{ display: modalData ? 'flex' : 'none' }} onClick={closeModal}>
                <div className="coordinator-modal-content" onClick={e => e.stopPropagation()}>
                    <button className="close-modal-btn" onClick={closeModal} aria-label="Close Modal">
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="modal-header">
                        <div className="modal-icon"><i className="fas fa-users"></i></div>
                        <h2>{modalData?.division}</h2>
                        <p>{modalData?.district} District Coordinators</p>
                    </div>
                    <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>

                        <h3 style={{ marginBottom: '15px' }}>District Coordinators</h3>
                        {modalData?.distCoordinators && modalData.distCoordinators.length > 0 ? (
                            <ul className="coordinator-modal-list" style={{ marginBottom: '30px', listStyle: 'none', padding: 0 }}>
                                {modalData.distCoordinators.map((coord, i) => (
                                    <li key={`dist-${i}`} style={{ padding: '15px', background: '#f8f9fa', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                                        <div style={{ background: '#6c757d', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className="fas fa-user-tie"></i>
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0, color: 'var(--text-dark)' }}>{coord}</h4>
                                            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>District Coordinator - {modalData.district}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '30px' }}>No district coordinators nominated yet.</p>
                        )}

                        <h3 style={{ marginBottom: '15px' }}>Divisional Coordinators</h3>
                        {modalData?.divCoordinators && modalData.divCoordinators.length > 0 ? (
                            <ul className="coordinator-modal-list" style={{ listStyle: 'none', padding: 0 }}>
                                {modalData.divCoordinators.map((coord, i) => (
                                    <li key={`div-${i}`} style={{ padding: '15px', background: '#f8f9fa', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                                        <div style={{ background: 'var(--accent-green)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className="fas fa-user-shield"></i>
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0, color: 'var(--text-dark)' }}>{coord}</h4>
                                            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>Divisional Coordinator - {modalData.division}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p style={{ fontStyle: 'italic', color: '#666' }}>No divisional coordinators nominated yet.</p>
                        )}

                    </div>
                </div>
            </div>
        </main>
    );
}
