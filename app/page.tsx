import { promises as fs } from 'fs';
import path from 'path';

type Curso = {
	codigo: string;
	nome: string;
	semestre: string;
	totalAlunos: number;
	disciplinasAtivas: number;
	capacidadeTotal: number;
};

type MockData = {
	cursos: Curso[];
};

async function getMockData(): Promise<MockData> {
	const filePath = path.join(process.cwd(), 'data', 'mock-data.json');
	const file = await fs.readFile(filePath, 'utf-8');
	return JSON.parse(file) as MockData;
}

export default async function Home() {
	const data = await getMockData();

	return (
		<main className="p-6">
			<h1 className="text-2xl font-bold">Uniso Flow</h1>
			<p className="mt-1 text-sm text-gray-600">Selecione um curso para visualizar o fluxo acadêmico</p>

			<section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{data.cursos.map(curso => (
					<article key={curso.codigo} className="rounded-lg border p-4 shadow-sm">
						<h2 className="text-lg font-semibold">{curso.nome}</h2>
						<p className="text-sm text-gray-600">Código: {curso.codigo}</p>
						<p className="text-sm text-gray-600">Semestre: {curso.semestre}</p>

						<div className="mt-3 space-y-1 text-sm">
							<p>Total de alunos: {curso.totalAlunos}</p>
							<p>Disciplinas ativas: {curso.disciplinasAtivas}</p>
							<p>Capacidade total: {curso.capacidadeTotal}</p>
						</div>
					</article>
				))}
			</section>
		</main>
	);
}
