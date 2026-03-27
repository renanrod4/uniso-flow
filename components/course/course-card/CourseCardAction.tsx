import { FiFileText } from 'react-icons/fi';

type CourseCardActionProps = {
	label?: string;
};

export default function CourseCardAction({ label = 'Gerenciar alunos por semestre' }: CourseCardActionProps) {
	return (
		<button
			type="button"
			className="mt-4 inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-link-primary transition hover:text-link-primary-hover"
		>
			<FiFileText className="text-xs" /> {label}
		</button>
	);
}
