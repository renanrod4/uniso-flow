type CourseCardSemesterProgressProps = {
	courseId: string;
	semestres: number;
};

function formatSemestreLabel(index: number) {
	return `${index + 1}o`;
}

export default function CourseCardSemesterProgress({ courseId, semestres }: CourseCardSemesterProgressProps) {
	return (
		<section className="mt-3">
			<div className="grid grid-cols-8 gap-1">
				{Array.from({ length: semestres }).map((_, index) => (
					<div key={`${courseId}-sem-${index + 1}`} className="h-2 rounded-full bg-semester-bar" />
				))}
			</div>
			<div className="mt-1.5 grid grid-cols-8 gap-1 text-center text-[11px] text-slate-400">
				{Array.from({ length: semestres }).map((_, index) => (
					<span key={`${courseId}-label-${index + 1}`}>{formatSemestreLabel(index)}</span>
				))}
			</div>
		</section>
	);
}
