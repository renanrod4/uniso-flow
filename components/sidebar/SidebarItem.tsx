import Link from 'next/link';
import { ReactNode } from 'react';

type SidebarItemProps = {
	href: string;
	children: ReactNode;
	active?: boolean;
};

export default function SidebarItem({ href, children, active }: SidebarItemProps) {
	return (
		<Link
			href={href}
			className={`flex items-center gap-2 px-4 py-3 rounded-lg transition text-sidebar-texto-inativo font-medium
        ${active ? 'bg-sidebar-hover-bg text-texto-branco font-bold hover:bg-sidebar-ativo-bg' : 'hover:bg-sidebar-hover-bg'}
      `}
		>
			{children}
		</Link>
	);
}
