import { IconType } from 'react-icons';

type CardColor = 'uniso-azul-escuro' | 'uniso-azul-medio' | 'uniso-azul-vibrante' | 'ocupacao-media' | 'ocupacao-alta' | 'uniso-dourado' | 'status-critico-cor';

type CardDashboardProps = {
	Icon: IconType;
	title: string;
	value: string | number;
	color?: CardColor;
};

const iconColorClasses: Record<CardColor, string> = {
	'uniso-azul-escuro': 'text-uniso-azul-escuro',
	'uniso-azul-medio': 'text-uniso-azul-medio',
	'uniso-azul-vibrante': 'text-uniso-azul-vibrante',
	'ocupacao-media': 'text-ocupacao-media',
	'ocupacao-alta': 'text-ocupacao-alta',
    'uniso-dourado': 'text-uniso-dourado',
    'status-critico-cor': 'text-status-critico-cor',
};

const iconBgClasses: Record<CardColor, string> = {
	'uniso-azul-escuro': 'bg-uniso-azul-escuro/15',
	'uniso-azul-medio': 'bg-uniso-azul-medio/15',
	'uniso-azul-vibrante': 'bg-uniso-azul-vibrante/15',
	'ocupacao-media': 'bg-ocupacao-media/15',
	'ocupacao-alta': 'bg-ocupacao-alta/15',
    'uniso-dourado': 'bg-uniso-dourado/15',
    'status-critico-cor': 'bg-status-critico-cor/15',
};

const defaultColor: CardColor = 'uniso-azul-vibrante';

export default function CardDashboard({ Icon, title, value, color = defaultColor }: CardDashboardProps) {
	return (
		<div className="flex flex-col flex-1 items-start p-4 min-w-70 max-w-90 rounded-2xl border border-borda-principal shadow-md bg-bg-card">
			<div className={`p-2 rounded-sm ${iconBgClasses[color]}`}>
				<Icon className={`${iconColorClasses[color]} text-xl`} />
			</div>
			<h1 className="text-3xl text-course-title">{value}</h1>
			<p className="text-sm text-texto-terciario mt-2">{title}</p>
		</div>
	);
}
