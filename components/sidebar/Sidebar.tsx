import Image from 'next/image';

import { TbLayoutDashboard } from 'react-icons/tb';
import { FaRegFileAlt, FaRegChartBar, FaRegUser } from 'react-icons/fa';
import { IoBookOutline } from 'react-icons/io5';
import { PiGearSix } from 'react-icons/pi';
import SidebarItem from './SidebarItem';

const items = [
	{ icon: <TbLayoutDashboard className="text-xl" />, label: 'Dashboard', href: '#', active: true },
	{ icon: <FaRegFileAlt className="text-xl" />, label: 'Alocação', href: '#' },
	{ icon: <IoBookOutline className="text-xl" />, label: 'Disciplinas', href: '#' },
	{ icon: <FaRegUser className="text-xl" />, label: 'Turmas', href: '#' },
	{ icon: <FaRegChartBar className="text-xl" />, label: 'Relatórios', href: '#' },
	{ icon: <PiGearSix className="text-xl" />, label: 'Configurações', href: '#' },
];

export default function Sidebar() {
	return (
		<aside className="w-78 min-h-screen flex flex-col p-0 pb-8 border-r border-sidebar-border text-white bg-linear-to-b from-sidebar-start to-sidebar-end">
			<div className="flex items-center gap-4 px-6 pt-8 pb-6 border-b border-white/10">
				<div className="bg-white p-1 rounded-md">
					<Image src="/images/uniso.png" alt="Uniso Flow Logo" width={40} height={40} />
				</div>
				<div>
					<div className="text-lg text-white">Uniso Flow</div>
					<div className="text-sm text-blue-300">Gestão Acadêmica</div>
				</div>
			</div>
			<nav className="flex flex-col gap-1 mt-6 p-3">
				{items.map(item => (
					// Itera sobre os itens do menu e renderiza cada um usando o componente SidebarItem
					<SidebarItem key={item.label} href={item.href} active={item.active}>
						{item.icon} {item.label}
					</SidebarItem>
				))}
			</nav>
		</aside>
	);
}
