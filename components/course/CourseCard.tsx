import type { Curso } from '@/types/mock-data';
import CourseCardAction from './course-card/CourseCardAction';
import CourseCardHeader from './course-card/CourseCardHeader';
import CourseCardMetrics from './course-card/CourseCardMetrics';
import CourseCardOccupancy from './course-card/CourseCardOccupancy';
import CourseCardSemesterProgress from './course-card/CourseCardSemesterProgress';

type CourseCardProps = {
	curso: Curso;
};

export default function CourseCard({ curso }: CourseCardProps) {
	return (
		<article className="rounded-lg border border-borda-principal bg-course-bg p-3 shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg">
			<CourseCardHeader nome={curso.nome} coordenador={curso.coordenador} />
			<CourseCardMetrics
				totalAlunos={curso.totalAlunos}
				totalDisciplinas={curso.totalDisciplinas}
				taxaOcupacao={curso.taxaOcupacao}
			/>
			<CourseCardOccupancy
				taxaOcupacao={curso.taxaOcupacao}
				turno={curso.turno}
				semestres={curso.semestres}
				alertas={curso.alertas}
			/>
			<CourseCardSemesterProgress courseId={curso.id} semestres={curso.semestres} />
			<CourseCardAction />
		</article>
	);
}
