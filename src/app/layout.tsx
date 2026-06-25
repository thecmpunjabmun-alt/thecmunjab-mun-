import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import ClientLogic from "@/components/ClientLogic";

export const metadata: Metadata = {
  title: "Turn Your Ambition into Achievement | CM Punjab MUN",
  description: "Join CM Punjab Model United Nations - Pakistan's premier youth leadership and empowerment program.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevents input zoom bug on iOS Safari
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light only" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div style={{ background: 'linear-gradient(90deg, #1e3c20, #345638)', color: 'white', textAlign: 'center', padding: '12px 20px', fontSize: '0.95rem', fontWeight: '500', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', zIndex: 1000, position: 'relative' }}>
            <i className="fas fa-bullhorn" style={{ color: '#f39c12' }}></i>
            <span><strong>Upcoming Event:</strong> The CM Punjab MUN Pre-Launch Event is happening on <strong>July 10th</strong> at the <strong>Nawaz Shareef Center of Excellence</strong>!</span>
        </div>
        <ClientLogic />
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
