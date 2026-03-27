import { LuClock3, LuTriangleAlert } from 'react-icons/lu';

type CourseCardOccupancyProps = {
	taxaOcupacao: number;
	turno: string;
	semestres: number;
	alertas: number;
};

export default function CourseCardOccupancy({ taxaOcupacao, turno, semestres, alertas }: CourseCardOccupancyProps) {
	const taxaNormalizada = Math.min(100, Math.max(0, taxaOcupacao));

	return (
		<section className="mt-4">
			<div className="h-2 rounded-full bg-occupancy-track">
				<div className="h-2 rounded-full bg-occupancy-fill" style={{ width: `${taxaNormalizada}%` }} />
			</div>

			<div className="mt-3 flex items-center justify-between gap-2">
				<p className="flex items-center gap-1.5 text-sm text-slate-400">
					<LuClock3 className="text-sm" />
					{turno} - {semestres} sem.
				</p>
				<span className="inline-flex items-center gap-1 rounded-full bg-alert-bg px-2.5 py-1 text-xs font-medium text-alert-text">
					<LuTriangleAlert className="text-xs" /> {alertas} alertas
				</span>
			</div>
		</section>
	);
}
