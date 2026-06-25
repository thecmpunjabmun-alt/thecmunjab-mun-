const fs = require('fs');
const css = `
/* ===== CUSTOM MODAL ===== */
.custom-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(13, 60, 30, 0.4);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.custom-modal {
    background: var(--white);
    padding: 40px;
    border-radius: 24px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
    text-align: center;
    max-width: 420px;
    width: 90%;
    position: relative;
    border: 1px solid rgba(255,255,255,0.2);
}

.custom-modal-icon {
    font-size: 3.5rem;
    color: var(--primary-green);
    margin-bottom: 25px;
    display: inline-block;
    padding: 20px;
    background: #e8f5e9;
    border-radius: 50%;
}

.custom-modal h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    color: var(--text-dark);
    margin-bottom: 12px;
    font-weight: 700;
}

.custom-modal p {
    color: var(--text-light);
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 35px;
}

.custom-modal-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
}

.btn-modal-cancel {
    padding: 14px 30px;
    background: transparent;
    color: var(--text-light);
    border: 2px solid #cbd5e1;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-modal-cancel:hover {
    background: #f1f5f9;
    color: var(--text-dark);
    border-color: #94a3b8;
}

.fade-in {
    animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.chat-footer input:disabled {
    background-color: #f1f5f9;
    cursor: not-allowed;
    opacity: 0.8;
}

.chat-footer button:disabled {
    background-color: #94a3b8;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}
`;
fs.appendFileSync('src/app/globals.css', css);
