import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the CM Punjab Model United Nations team. Find our contact details, email, and social media links.',
  openGraph: {
    title: 'CM Punjab MUN | Contact Us',
    description: 'Get in touch with the CM Punjab Model United Nations team. Find our contact details, email, and social media links.',
    url: 'https://cmpunjabmun.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
