// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bth-aiap.github.io',
	integrations: [
		starlight({
			title: 'AIAP',
			defaultLocale: 'root',
			locales: { root: { label: 'Svenska', lang: 'sv' } },
			sidebar: [
				{
					label: 'Kursöversikt',
					items: [
						'',
						'kunskap/examination',
						'kunskap/seminarier',
						'kunskap/kodgranskning',
					],
				},
				{
					label: 'Del 0 – Förberedelser',
					items: [
						'del0',
						'del0/setup',
						'del0/llm-bakgrund',
						'del0/harness',
					],
				},
				{
					label: 'Kursdelar',
					items: ['del1', 'del2', 'del3'],
				},
				{
					label: 'Kunskap',
					items: [
						'kunskap/verifiering',
						'kunskap/etik_och_hallbarhet',
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
			pagination: false,
		}),
	],
});
