import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Governing Body',
  description: 'Meet the Governing Body behind the CM Punjab Model United Nations. Dedicated individuals working towards youth empowerment.',
  openGraph: {
    title: 'CM Punjab MUN | Governing Body',
    description: 'Meet the Governing Body behind the CM Punjab Model United Nations. Dedicated individuals working towards youth empowerment.',
    url: 'https://cmpunjabmun.com/core-team',
  },
};

export default function CoreTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
