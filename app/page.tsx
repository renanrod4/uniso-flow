import { promises as fs } from 'fs';
import path from 'path';
import type { MockData } from '@/types/mock-data';

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
					<article key={curso.id} className="rounded-lg border p-4 shadow-sm">
						<h2 className="text-lg font-semibold">{curso.nome}</h2>
						<p className="text-sm text-gray-600">ID: {curso.id}</p>
						<p className="text-sm text-gray-600">Coordenador: {curso.coordenador}</p>
						<p className="text-sm text-gray-600">Turno: {curso.turno}</p>

						<div className="mt-3 space-y-1 text-sm">
							<p>Total de alunos: {curso.totalAlunos}</p>
							<p>Total de disciplinas: {curso.totalDisciplinas}</p>
							<p>Taxa de ocupação: {curso.taxaOcupacao}%</p>
							<p>Alertas ativos: {curso.alertas}</p>
							<p>Duração: {curso.semestres} semestres</p>
						</div>
					</article>
				))}
			</section>
		</main>
	);
}
