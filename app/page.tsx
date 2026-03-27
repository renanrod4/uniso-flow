import { promises as fs } from 'fs';
import path from 'path';
import type { MockData } from '@/types/mock-data';
import CourseCard from '@/components/course/CourseCard';

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

			<section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
				{data.cursos.map(curso => (
					<CourseCard key={curso.id} curso={curso} />
				))}
			</section>
		</main>
	);
}
