export default function Home() {
	const cursos = [
		'Administração',
		'Análise e Desenvolvimento de Sistemas',
		'Arquitetura e Urbanismo',
		'Artes Visuais',
		'Biomedicina',
		'Ciência da Computação',
		'Ciência de Dados e Inteligência Artificial',
		'Ciências Biológicas (Bacharelado)',
		'Ciências Contábeis',
		'Ciências Econômicas',
		'Comércio Exterior',
		'Design',
		'Direito',
		'Educação Física',
		'Enfermagem',
		'Engenharia Agronômica',
		'Engenharia Civil',
		'Engenharia da Computação',
		'Engenharia de Controle e Automação',
		'Engenharia de Produção',
		'Engenharia Elétrica',
		'Engenharia Mecânica',
		'Engenharia Química',
		'Estética e Cosmética',
		'Farmácia',
		'Filosofia (Bacharelado)',
		'Fisioterapia',
		'Fonoaudiologia',
		'Gastronomia',
		'Gestão Comercial',
		'Gestão de Equinocultura',
		'Gestão de Recursos Humanos',
		'Gestão Financeira',
		'História',
		'Jogos Digitais',
		'Jornalismo',
		'Logística',
		'Marketing',
		'Medicina Veterinária',
		'Moda',
		'Nutrição',
		'Odontologia',
		'Pedagogia',
		'Pedagogia (integral)',
		'Processos Gerenciais',
		'Psicologia',
		'Publicidade e Propaganda',
		'Relações Internacionais',
		'Relações Públicas',
		'Terapia Ocupacional',
	];
	return (
		<main>
			<h1 className="text-2xl">Lista de Cursos</h1>
			<ul>
				{cursos.map((curso, index) => (
					<li key={index}>{curso}</li>
				))}
			</ul>
		</main>
	);
}
