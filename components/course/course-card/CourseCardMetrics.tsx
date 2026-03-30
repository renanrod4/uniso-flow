type CourseCardMetricsProps = {
	totalAlunos: number;
	totalDisciplinas: number;
	taxaOcupacao: number;
};

const numberFormatter = new Intl.NumberFormat('pt-BR');

function getOccupancyTextClass(percentage: number) {
	if (percentage >= 90) {
		return 'text-occupancy-alert';
	}

	if (percentage >= 75) {
		return 'text-occupancy-warn';
	}

	return 'text-occupancy-ok';
}

export default function CourseCardMetrics({ totalAlunos, totalDisciplinas, taxaOcupacao }: CourseCardMetricsProps) {
	const occupancyTextClass = getOccupancyTextClass(taxaOcupacao);

	return (
		<section className="mt-4 flex w-full items-center justify-center gap-12 text-center">
			<div>
				<p className="text-2xl font-semibold leading-none tracking-tight text-course-metric">
					{numberFormatter.format(totalAlunos)}
				</p>
				<p className="mt-1 text-sm text-slate-400">Alunos</p>
			</div>
			<div>
				<p className="text-2xl font-semibold leading-none tracking-tight text-course-metric">
					{totalDisciplinas}
				</p>
				<p className="mt-1 text-sm text-slate-400">Disciplinas</p>
			</div>
			<div>
				<p className={`text-2xl font-semibold leading-none tracking-tight ${occupancyTextClass}`}>
					{taxaOcupacao}%
				</p>
				<p className="mt-1 text-sm text-slate-400">Ocupação</p>
			</div>
		</section>
	);
}
