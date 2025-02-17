import type { WorkData } from "../types";

const BASE_IMAGE_PATH = "/images/works/zuiko-festival-2022";
const PC_IMAGE_PATH = `${BASE_IMAGE_PATH}/pc`;
const SP_IMAGE_PATH = `${BASE_IMAGE_PATH}/sp`;

export const zuikoFestival2022: WorkData = {
	id: "zuiko-festival-2022",
	title: "ZUIKO FESTIVAL 2022",
	summary: "名大eスポーツサークルDisboardが主催する「瑞光祭2022」のティザーサイトの制作",
	details: [
		"名大eスポーツサークルDisboardが主催する「瑞光祭2022」のティザーサイトの制作。",
		"ゲームによる学祭がコンセプトのeスポーツイベントです。",
		"トップページの「瑞」のアニメーションは、AfterEffectsで制作してWebサイトに組み込んでいます。",
		"Vue2/Nuxt2を使用して制作しており、レスポンシブデザインに対応しています。",
	],
	thumbnail: {
		title: "ZUIKO FESTIVAL 2022",
		src: `${BASE_IMAGE_PATH}/zuiko-festival-2022.webp`,
		thumbnailSrc: `${BASE_IMAGE_PATH}/zuiko-festival-2022_thumb.webp`,
	},
	roles: ["フロントエンド", "デザイン"],
	technologies: [
		{ name: "Vue", version: "2", iconSrc: "/images/logo/vue-logo.svg" },
		{ name: "Nuxt", version: "2", iconSrc: "/images/logo/nuxt-logo.svg" },
	],
	links: ["https://zuiko-festival.bex.jp/"],
	images: [
		{
			title: "トップページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-1.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-1_thumb.webp`,
		},
		{
			title: "イベント一覧ページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-2.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-2_thumb.webp`,
		},
		{
			title: "前夜祭ページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-3.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-3_thumb.webp`,
		},
		{
			title: "DAY1イベントページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-4.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-4_thumb.webp`,
		},
		{
			title: "DAY2イベントページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-5.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-5_thumb.webp`,
		},
		{
			title: "ギフトページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-6.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-6_thumb.webp`,
		},
		{
			title: "スタッフページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-7.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-7_thumb.webp`,
		},
		{
			title: "スポンサーページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-8.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-8_thumb.webp`,
		},
		{
			title: "LIVE配信ページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-9.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-9_thumb.webp`,
		},
		{
			title: "お問い合わせページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-10.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-10_thumb.webp`,
		},

		{
			title: "トップページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-1.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-1_thumb.webp`,
		},
		{
			title: "イベント一覧ページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-2.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-2_thumb.webp`,
		},
		{
			title: "前夜祭ページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-3.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-3_thumb.webp`,
		},
		{
			title: "DAY1イベントページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-4.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-4_thumb.webp`,
		},
		{
			title: "DAY2イベントページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-5.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-5_thumb.webp`,
		},
		{
			title: "ギフトページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-6.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-6_thumb.webp`,
		},
		{
			title: "スタッフページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-7.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-7_thumb.webp`,
		},
		{
			title: "スポンサーページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-8.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-8_thumb.webp`,
		},
		{
			title: "LIVE配信ページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-9.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-9_thumb.webp`,
		},
		{
			title: "お問い合わせページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-10.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-10_thumb.webp`,
		},
	],
};
