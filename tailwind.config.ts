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
        'sidebar-start': '#1a1a5e',
        'sidebar-end': '#2b3a8e',
        'sidebar-border': '#23235a',
        'course-bg': '#f8f9fb',
        'course-title': '#1f2f7b',
        'course-metric': '#1c2b73',
        'occupancy-text': '#e3a018',
        'occupancy-warn': '#e7a51f',
        'occupancy-alert': '#e53935',
        'occupancy-ok': '#43a047',
        'occupancy-track': '#e5e7f0',
        'alert-bg': '#fdecef',
        'alert-text': '#ef4a5f',
        'semester-bar': '#616ab1',
        'link-primary': '#2f71ff',
        'link-primary-hover': '#275ad0',
      },
    },
  },
};

export default config;
