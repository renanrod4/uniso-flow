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
			className={`flex items-center gap-2 px-4 py-3 rounded-lg transition text-blue-200 font-medium
        ${active ? 'bg-white/10 text-white font-bold hover:bg-white/20' : 'hover:bg-white/10'}
      `}
		>
			{children}
		</Link>
	);
}
