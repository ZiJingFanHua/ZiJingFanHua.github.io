import { link } from "fs";

export const SITE = {
	title: 'ZiJingBlog',
	description: 'ZiJingBlog',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// ALGOLIA 配置
export const ALGOLIA = {
	indexName: 'zijngWeb',
	appId: 'XZSSKNJDAG',
	apiKey: 'f5123d6482af4d3a40c09f6b60567144',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'2021': [
			{ text: 'Introduction', link: 'docs/en/introduction' },
			{ text: 'Page 2', link: 'docs/en/page-2' },
			{ text: 'Page 3', link: 'docs/en/page-3' },
			{ text: '常见网络攻击', link: 'docs/en/internet-attack' },
		],
		'2023': [{ text: 'Page 4', link: 'docs/en/page-4' },
		{ text: "Bloom box", link: 'docs/en/bloom-box' }],
		'框架配置': [{ text: 'Astro快速搭建博客', link: 'docs/en/astro-fast-building' }],
	},
};
