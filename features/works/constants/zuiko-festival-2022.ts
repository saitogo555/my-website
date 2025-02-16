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
		src: `${BASE_IMAGE_PATH}/zuiko-festival-2022.jpg`,
		thumbnailSrc: `${BASE_IMAGE_PATH}/zuiko-festival-2022_thumb.jpg`,
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
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-1.jpg`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-1_thumb.jpg`,
		},
		{
			title: "イベント一覧ページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-2.jpg`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-2_thumb.jpg`,
		},
		{
			title: "前夜祭ページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-3.jpg`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-3_thumb.jpg`,
		},
		{
			title: "DAY1イベントページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-4.jpg`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-4_thumb.jpg`,
		},
		{
			title: "DAY2イベントページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-5.jpg`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-5_thumb.jpg`,
		},
		{
			title: "ギフトページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-6.jpg`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-6_thumb.jpg`,
		},
		{
			title: "スタッフページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-7.jpg`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-7_thumb.jpg`,
		},
		{
			title: "スポンサーページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-8.jpg`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-8_thumb.jpg`,
		},
		{
			title: "LIVE配信ページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-9.jpg`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-9_thumb.jpg`,
		},
		{
			title: "お問い合わせページ (PC)",
			src: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-10.jpg`,
			thumbnailSrc: `${PC_IMAGE_PATH}/zuiko-festival-2022_pc-10_thumb.jpg`,
		},

		{
			title: "トップページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-1.jpg`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-1_thumb.jpg`,
		},
		{
			title: "イベント一覧ページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-2.jpg`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-2_thumb.jpg`,
		},
		{
			title: "前夜祭ページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-3.jpg`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-3_thumb.jpg`,
		},
		{
			title: "DAY1イベントページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-4.jpg`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-4_thumb.jpg`,
		},
		{
			title: "DAY2イベントページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-5.jpg`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-5_thumb.jpg`,
		},
		{
			title: "ギフトページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-6.jpg`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-6_thumb.jpg`,
		},
		{
			title: "スタッフページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-7.jpg`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-7_thumb.jpg`,
		},
		{
			title: "スポンサーページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-8.jpg`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-8_thumb.jpg`,
		},
		{
			title: "LIVE配信ページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-9.jpg`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-9_thumb.jpg`,
		},
		{
			title: "お問い合わせページ (SP)",
			src: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-10.jpg`,
			thumbnailSrc: `${SP_IMAGE_PATH}/zuiko-festival-2022_sp-10_thumb.jpg`,
		},
	],
};
