import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./types/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				/* Nova nomenclatura */
				'uniso-azul-escuro': 'var(--uniso-azul-escuro)',
				'uniso-azul-medio': 'var(--uniso-azul-medio)',
				'uniso-azul-vibrante': 'var(--uniso-azul-vibrante)',
				'uniso-azul-hover': 'var(--uniso-azul-hover)',
				'uniso-dourado': 'var(--uniso-dourado)',
				'uniso-laranja-atencao': 'var(--uniso-laranja-atencao)',

				'sidebar-texto-secundario': 'var(--sidebar-texto-secundario)',
				'sidebar-texto-inativo': 'var(--sidebar-texto-inativo)',
				'sidebar-hover-bg': 'var(--sidebar-hover-bg)',
				'sidebar-ativo-bg': 'var(--sidebar-ativo-bg)',
				'sidebar-borda': 'var(--sidebar-borda)',

				'status-critico-cor': 'var(--status-critico-cor)',
				'status-critico-bg': 'var(--status-critico-bg)',
				'status-atencao-cor': 'var(--status-atencao-cor)',
				'status-atencao-bg': 'var(--status-atencao-bg)',
				'status-ok-cor': 'var(--status-ok-cor)',
				'status-ok-bg': 'var(--status-ok-bg)',
				'status-ocioso-cor': 'var(--status-ocioso-cor)',
				'status-ocioso-bg': 'var(--status-ocioso-bg)',

				'postit-amarelo': 'var(--postit-amarelo)',
				'postit-verde': 'var(--postit-verde)',
				'postit-azul': 'var(--postit-azul)',
				'postit-rosa': 'var(--postit-rosa)',
				'postit-roxo': 'var(--postit-roxo)',
				'postit-laranja': 'var(--postit-laranja)',
				'postit-turquesa': 'var(--postit-turquesa)',
				'postit-lilas': 'var(--postit-lilas)',

				'trash-normal': 'var(--trash-normal)',
				'trash-hover': 'var(--trash-hover)',
				'trash-borda-normal': 'var(--trash-borda-normal)',
				'trash-borda-hover': 'var(--trash-borda-hover)',

				'bg-principal': 'var(--bg-principal)',
				'bg-card': 'var(--bg-card)',
				'bg-input': 'var(--bg-input)',
				'bg-muted': 'var(--bg-muted)',
				'bg-hover': 'var(--bg-hover)',

				'borda-principal': 'var(--borda-principal)',
				'borda-input': 'var(--borda-input)',
				'borda-sutil': 'var(--borda-sutil)',
				'borda-focus': 'var(--borda-focus)',

				'texto-principal': 'var(--texto-principal)',
				'texto-secundario': 'var(--texto-secundario)',
				'texto-terciario': 'var(--texto-terciario)',
				'texto-desabilitado': 'var(--texto-desabilitado)',
				'texto-branco': 'var(--texto-branco)',
				'texto-postit': 'var(--texto-postit)',

				'chart-barra-primaria': 'var(--chart-barra-primaria)',
				'chart-barra-destaque': 'var(--chart-barra-destaque)',
				'chart-grid': 'var(--chart-grid)',
				'chart-eixo': 'var(--chart-eixo)',

				'drag-hover-azul': 'var(--drag-hover-azul)',
				'drag-hover-bg': 'var(--drag-hover-bg)',
				'focus-ring': 'var(--focus-ring)',
				'hover-overlay': 'var(--hover-overlay)',
				'ocupacao-baixa': 'var(--ocupacao-baixa)',
				'ocupacao-media': 'var(--ocupacao-media)',
				'ocupacao-alta': 'var(--ocupacao-alta)',

				/* Aliases legados (compatibilidade com classes atuais) */
				'sidebar-start': 'var(--uniso-azul-escuro)',
				'sidebar-end': 'var(--uniso-azul-medio)',
				'sidebar-border': 'var(--sidebar-borda)',
				'course-bg': 'var(--bg-principal)',
				'course-title': 'var(--texto-principal)',
				'course-metric': 'var(--uniso-azul-escuro)',
				'occupancy-text': 'var(--uniso-dourado)',
				'occupancy-warn': 'var(--ocupacao-media)',
				'occupancy-alert': 'var(--ocupacao-alta)',
				'occupancy-ok': 'var(--ocupacao-baixa)',
				'occupancy-track': 'var(--borda-principal)',
				'alert-bg': 'var(--status-critico-bg)',
				'alert-text': 'var(--status-critico-cor)',
				'semester-bar': 'var(--uniso-azul-medio)',
				'link-primary': 'var(--uniso-azul-vibrante)',
				'link-primary-hover': 'var(--uniso-azul-hover)',
			},
			backgroundImage: {
				'gradient-sidebar': 'var(--gradient-sidebar)',
				'gradient-sidebar-hover': 'var(--gradient-sidebar-hover)',
				'gradient-botao-primario': 'var(--gradient-botao-primario)',
				'gradient-login-bg': 'var(--gradient-login-bg)',
			},
			borderRadius: {
				sm: 'var(--radius-sm)',
				md: 'var(--radius-md)',
				lg: 'var(--radius-lg)',
				xl: 'var(--radius-xl)',
			},
			boxShadow: {
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
				xl: 'var(--shadow-xl)',
			},
		},
	},
};

export default config;
