import { promises as fs } from 'fs';
import path from 'path';
import type { MockData } from '@/types/mock-data';
import CourseCard from '@/components/course/CourseCard';
import { FiUsers } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import CardDashboard from '@/components/dashboard/card-dashboard/CardDashboard';


async function getMockData(): Promise<MockData> {
	const filePath = path.join(process.cwd(), 'data', 'mock-data.json');
	const file = await fs.readFile(filePath, 'utf-8');
	return JSON.parse(file) as MockData;
}

export default async function Home() {
	const data = await getMockData();

	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1; // getMonth is zero-based
	const semester = month <= 6 ? 1 : 2;

	return (
		<main className="p-6">
			<Dashboard year={year} semester={semester} data={data} />
			<CourseList data={data}/>			
			
		</main>
	);
}

function Dashboard({ year, semester, data }: { year: number; semester: number; data: MockData }) {
	return (
		<section className="mb-8">
			<H2>Painel de Controle</H2>
			<p className="mt-1 text-sm text-gray-600">
				Visão geral de todos os cursos de  {`${year}.${semester}`}
			</p>
			<div className="mt-4 flex items-center gap-4 w-full">
				<CardDashboard Icon={FiUsers} title="Total de Alunos" value={data.cursos.reduce((sum, curso) => sum + curso.totalAlunos, 0)} color='uniso-azul-escuro' />
				<CardDashboard Icon={RiGraduationCapLine} title="Total de Disciplinas" value={data.cursos.reduce((sum, curso) => sum + curso.totalDisciplinas, 0)} color='uniso-azul-vibrante' />
				<CardDashboard Icon={FaRegChartBar} title="Ocupação Média" value={`${Math.round(data.cursos.reduce((sum, curso) => sum + curso.taxaOcupacao, 0) / data.cursos.length)}%`} color='uniso-dourado' />
				<CardDashboard Icon={IoWarningOutline} title="Alertas Ativos" value={data.cursos.reduce((sum, curso) => sum + curso.alertas, 0)} color='status-critico-cor' />
			</div>

		</section>
	)
}

function CourseList({ data }: { data: MockData }) {
	return(
		<section>
			<H2>Cursos</H2>
			
			<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
				{data.cursos.map(curso => (
					<CourseCard key={curso.id} curso={curso} />
				))}
			</div>
		</section>
	)
}



function H2({ children }: { children: React.ReactNode }) {
	return <h2 className="text-2xl font-semibold text-texto-principal">{children}</h2>
}