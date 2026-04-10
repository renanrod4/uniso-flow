import { FiArrowRight } from 'react-icons/fi';

type CourseCardHeaderProps = {
	nome: string;
	coordenador: string;
};

export default function CourseCardHeader({ nome, coordenador }: CourseCardHeaderProps) {
	return (
		<header className="flex items-start justify-between gap-3">
			<div>
				<h2 className="text-xl leading-none font-semibold tracking-tight text-course-title">{nome}</h2>
				<p className="mt-1 text-xs text-texto-terciario">{coordenador}</p>
			</div>
			<button
				type="button"
				aria-label={`Abrir detalhes do curso ${nome}`}
				className="rounded-full p-1 text-texto-desabilitado transition hover:bg-bg-hover hover:text-course-title"
			>
				<FiArrowRight className="text-base" />
			</button>
		</header>
	);
}
