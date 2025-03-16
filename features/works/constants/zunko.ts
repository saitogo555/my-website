import type { WorkData } from "../types";

const BASE_IMAGE_PATH = "/images/works/zunko";
const PC_IMAGE_PATH = `${BASE_IMAGE_PATH}/pc`;
const SP_IMAGE_PATH = `${BASE_IMAGE_PATH}/sp`;

export const ZUNKO: WorkData = {
	id: "zunko",
	title: "東北ずん子・ずんだもんプロジェクト",
	summary: "利用手引ページと版権窓口ページに掲載のPowerPointをHTML/CSS/Bootstrapで再現制作",
	details: [
		"利用手引ページと版権窓口ページに掲載のPowerPointをHTML/CSS/Bootstrapで再現制作。",
		"最初はPowerPointのスライドを画像にして利用手引と版権窓口を掲載されていました。",
		"画像だと編集がしにくいため、HTML/CSS/Bootstrapで再現制作してほしいというご依頼です。",
	],
	thumbnail: {
		title: "東北ずん子・ずんだもんプロジェクト",
		src: `${BASE_IMAGE_PATH}/zunko.webp`,
		thumbnailSrc: `${BASE_IMAGE_PATH}/zunko_thumb.webp`,
	},
	roles: ["フロントエンド"],
	technologies: [
		{ name: "HTML", iconSrc: "/images/logo/html-logo.svg" },
		{ name: "CSS", iconSrc: "/images/logo/css-logo.svg" },
		{ name: "Bootstrap", iconSrc: "/images/logo/bootstrap-logo.svg" },
	],
	links: [
		"https://zunko.jp/",
		"https://zunko.jp/guideline.html",
		"https://zunko.jp/con_shoushi.html",
	],
	images: [
		{
			title: "利用手引ページ (PC)",
			src: `${PC_IMAGE_PATH}/zunko_pc-1.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zunko_pc-1_thumb.webp`,
		},
		{
			title: "版権窓口ページ (PC)",
			src: `${PC_IMAGE_PATH}/zunko_pc-2.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zunko_pc-2_thumb.webp`,
		},
		{
			title: "利用手引ページ 1/3 (SP)",
			src: `${SP_IMAGE_PATH}/zunko_sp-1.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zunko_sp-1_thumb.webp`,
		},
		{
			title: "利用手引ページ 2/3 (SP)",
			src: `${SP_IMAGE_PATH}/zunko_sp-2.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zunko_sp-2_thumb.webp`,
		},
		{
			title: "利用手引ページ 3/3 (SP)",
			src: `${SP_IMAGE_PATH}/zunko_sp-3.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zunko_sp-3_thumb.webp`,
		},
		{
			title: "版権窓口ページ 1/3 (SP)",
			src: `${SP_IMAGE_PATH}/zunko_sp-4.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zunko_sp-4_thumb.webp`,
		},
		{
			title: "版権窓口ページ 2/3 (SP)",
			src: `${SP_IMAGE_PATH}/zunko_sp-5.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zunko_sp-5_thumb.webp`,
		},
		{
			title: "版権窓口ページ 3/3 (SP)",
			src: `${SP_IMAGE_PATH}/zunko_sp-6.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zunko_sp-6_thumb.webp`,
		},
	],
};
