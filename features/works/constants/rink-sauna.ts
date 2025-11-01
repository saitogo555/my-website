import type { WorkData } from "../types";

const BASE_IMAGE_PATH = "/images/works/rink-sauna";
const PC_IMAGE_PATH = `${BASE_IMAGE_PATH}/pc`;
const SP_IMAGE_PATH = `${BASE_IMAGE_PATH}/sp`;

export const RINK_SAUNA: WorkData = {
	id: "rink-sauna",
	title: "Rink SAUNA",
	summary:
		"国産ヒノキを使った高品質かつリーズナブルな国産バレルサウナを提供するRinkSAUNAのWebサイト制作",
	details: [
		"国産ヒノキを使った高品質かつリーズナブルな国産バレルサウナを提供するRinkSAUNAのWebサイト制作",
		"提供されたデザインを元にWordPressでカスタムテーマを作成し、レスポンシブ対応で制作しています。",
		"製品一覧・ニュース一覧は管理画面から更新が可能で、カスタム投稿タイプを使用して作成しています。",
	],
	thumbnail: {
		title: "Rink SAUNA",
		src: `${BASE_IMAGE_PATH}/rink-sauna.webp`,
		thumbnailSrc: `${BASE_IMAGE_PATH}/rink-sauna_thumb.webp`,
	},
	roles: ["フロントエンド", "バックエンド"],
	technologies: [{ name: "WordPress", iconSrc: "/images/logo/wordpress-logo.svg" }],
	links: ["https://rink-sauna.com/"],
	images: [
		{
			title: "トップページ (PC)",
			src: `${PC_IMAGE_PATH}/rink-sauna_pc-1.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/rink-sauna_pc-1_thumb.webp`,
		},
		{
			title: "会社概要ページ (PC)",
			src: `${PC_IMAGE_PATH}/rink-sauna_pc-2.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/rink-sauna_pc-2_thumb.webp`,
		},
		{
			title: "ニュース一覧ページ (PC)",
			src: `${PC_IMAGE_PATH}/rink-sauna_pc-3.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/rink-sauna_pc-3_thumb.webp`,
		},
		{
			title: "ニュース詳細ページ (PC)",
			src: `${PC_IMAGE_PATH}/rink-sauna_pc-4.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/rink-sauna_pc-4_thumb.webp`,
		},
		{
			title: "製品一覧ページ (PC)",
			src: `${PC_IMAGE_PATH}/rink-sauna_pc-5.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/rink-sauna_pc-5_thumb.webp`,
		},
		{
			title: "製品詳細ページ (PC)",
			src: `${PC_IMAGE_PATH}/rink-sauna_pc-6.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/rink-sauna_pc-6_thumb.webp`,
		},

		{
			title: "トップページ (SP)",
			src: `${SP_IMAGE_PATH}/rink-sauna_sp-1.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/rink-sauna_sp-1_thumb.webp`,
		},
		{
			title: "会社概要ページ (SP)",
			src: `${SP_IMAGE_PATH}/rink-sauna_sp-2.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/rink-sauna_sp-2_thumb.webp`,
		},
		{
			title: "ニュース一覧ページ (SP)",
			src: `${SP_IMAGE_PATH}/rink-sauna_sp-3.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/rink-sauna_sp-3_thumb.webp`,
		},
		{
			title: "ニュース詳細ページ (SP)",
			src: `${SP_IMAGE_PATH}/rink-sauna_sp-4.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/rink-sauna_sp-4_thumb.webp`,
		},
		{
			title: "製品一覧ページ (SP)",
			src: `${SP_IMAGE_PATH}/rink-sauna_sp-5.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/rink-sauna_sp-5_thumb.webp`,
		},
		{
			title: "製品詳細ページ (SP)",
			src: `${SP_IMAGE_PATH}/rink-sauna_sp-6.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/rink-sauna_sp-6_thumb.webp`,
		},
		{
			title: "グローバルナビゲーション (SP)",
			src: `${SP_IMAGE_PATH}/rink-sauna_sp-7.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/rink-sauna_sp-7_thumb.webp`,
		},
	],
};
