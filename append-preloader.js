const fs = require('fs');
const css = `
/* ===== PRELOADER STYLES ===== */
.preloader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    transition: opacity 0.5s ease-out;
}
.preloader-overlay.fade-out {
    opacity: 0;
    pointer-events: none;
}
.preloader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.logo-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
}
.pulse-logo {
    width: 240px;
    height: auto;
    animation: pulse-animation 2s ease-in-out infinite;
    z-index: 2;
}
.punchline h2 {
    color: var(--text-dark, #1a202c);
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
    font-weight: 700;
    letter-spacing: 1px;
}
.punchline p {
    color: var(--primary-green, #6c757d);
    font-size: 1rem;
    margin: 0;
    letter-spacing: 3px;
    text-transform: uppercase;
}
@keyframes pulse-animation {
    0% { transform: scale(0.95); opacity: 0.9; }
    50% { transform: scale(1.02); opacity: 1; }
    100% { transform: scale(0.95); opacity: 0.9; }
}
`;
fs.appendFileSync('src/app/globals.css', css);
