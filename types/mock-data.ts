export type StatusType = 'critico' | 'atencao' | 'ok' | 'ocioso';

export type AlunosPorSemestre = {
	semestre: string;
	alunos: number;
};

export type Disciplina = {
	nome: string;
	semestre: number;
	prereq: string;
	demanda: number;
	capacidade: number;
	status: StatusType;
};

export type Turma = {
	disc: string;
	turma: string;
	horario: string;
	sala: string;
	cap: number;
	mat: number;
	prof: string;
};

export type Alerta = {
	msg: string;
	type: StatusType;
};

export type Curso = {
	id: string;
	nome: string;
	coordenador: string;
	totalAlunos: number;
	totalDisciplinas: number;
	taxaOcupacao: number;
	alertas: number;
	turno: string;
	semestres: number;
	alunosPorSemestre: AlunosPorSemestre[];
	disciplinas: Disciplina[];
	turmas: Turma[];
	alertasList: Alerta[];
	sugestoes: string[];
};

export type Aluno = {
	id: string;
	nome: string;
	ra: string;
	semestre: number;
	cor: string;
};

export type StatusConfigItem = {
	label: string;
	color: string;
	bg: string;
};

export type MockData = {
	cursos: Curso[];
	alunosPorCurso: Record<string, Aluno[]>;
	statusConfig: Record<StatusType, StatusConfigItem>;
};
