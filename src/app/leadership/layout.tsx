import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Leadership',
  description: 'Meet the Leadership team of CM Punjab Model United Nations. A dedicated group steering the vision and execution of the initiative.',
  openGraph: {
    title: 'CM Punjab MUN | Our Leadership',
    description: 'Meet the Leadership team of CM Punjab Model United Nations. A dedicated group steering the vision and execution of the initiative.',
    url: 'https://cmpunjabmun.com/leadership',
  },
};

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
