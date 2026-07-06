import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Provincial Team',
  description: 'Meet the Provincial Team of CM Punjab Model United Nations. District Coordinators leading the initiative across Punjab.',
  openGraph: {
    title: 'CM Punjab MUN | Provincial Team',
    description: 'Meet the Provincial Team of CM Punjab Model United Nations. District Coordinators leading the initiative across Punjab.',
    url: 'https://cmpunjabmun.com/provincial-team',
  },
};

export default function ProvincialTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
