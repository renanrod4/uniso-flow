import type { Metadata } from 'next';

import './layout.css';
import Sidebar from '@/components/sidebar/Sidebar';

export const metadata: Metadata = {
	title: 'Uniso Flow',
	description: 'Gestão estratégica de fluxo acadêmico e equilíbrio de turmas para a Uniso',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body style={{ margin: 0, padding: 0 }}>
				<div style={{ display: 'flex', minHeight: '100vh' }}>
					<Sidebar />
					<main style={{ flex: 1 }}>{children}</main>
				</div>
			</body>
		</html>
	);
}
