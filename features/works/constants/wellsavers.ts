import type { WorkData } from "../types";

const BASE_IMAGE_PATH = "/images/works/wellsavers";
const PC_IMAGE_PATH = `${BASE_IMAGE_PATH}/pc`;
const SP_IMAGE_PATH = `${BASE_IMAGE_PATH}/sp`;

export const WELLSAVERS: WorkData = {
	id: "wellsavers",
	title: "WELLSAVERS",
	summary:
		"長崎と佐賀でトータルクリーニングを提供しているHOUSESAVERSの清掃サービス部門のWebサイト制作",
	details: [
		"長崎と佐賀でトータルクリーニングを提供しているHOUSESAVERSの清掃サービス部門のWebサイト制作。",
		"Astroを使ったコンポーネント指向のレスポンシブ対応の静的サイトとして制作しています。",
		"microCMSを使って作業報告の更新がしやすいようにしています。",
		"WELLSAVERSのロゴは生成AIで制作しており、クリーンで清潔なイメージのデザインに仕上げてます。",
		"お問い合わせ処理はPHPで実装しています。",
	],
	thumbnail: {
		title: "WELLSAVERS",
		src: `${BASE_IMAGE_PATH}/wellsavers.webp`,
		thumbnailSrc: `${BASE_IMAGE_PATH}/wellsavers_thumb.webp`,
	},
	roles: ["フロントエンド", "バックエンド", "デザイン"],
	technologies: [
		{ name: "Astro", version: "2", iconSrc: "/images/logo/astro-logo.svg" },
		{ name: "microCMS", iconSrc: "/images/logo/microcms-logo.svg" },
	],
	links: ["https://wellsavers.jp/"],
	images: [
		{
			title: "トップページ (PC)",
			src: `${PC_IMAGE_PATH}/wellsavers_pc-1.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/wellsavers_pc-1_thumb.webp`,
		},
		{
			title: "個人のご依頼ページ (PC)",
			src: `${PC_IMAGE_PATH}/wellsavers_pc-2.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/wellsavers_pc-2_thumb.webp`,
		},
		{
			title: "法人のご依頼ページ (PC)",
			src: `${PC_IMAGE_PATH}/wellsavers_pc-3.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/wellsavers_pc-3_thumb.webp`,
		},
		{
			title: "お問い合わせページ (PC)",
			src: `${PC_IMAGE_PATH}/wellsavers_pc-4.webp`,
			thumbnailSrc: `${PC_IMAGE_PATH}/wellsavers_pc-4_thumb.webp`,
		},
		{
			title: "トップページ (SP)",
			src: `${SP_IMAGE_PATH}/wellsavers_sp-1.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/wellsavers_sp-1_thumb.webp`,
		},
		{
			title: "個人のご依頼ページ (SP)",
			src: `${SP_IMAGE_PATH}/wellsavers_sp-2.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/wellsavers_sp-2_thumb.webp`,
		},
		{
			title: "法人のご依頼ページ (SP)",
			src: `${SP_IMAGE_PATH}/wellsavers_sp-3.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/wellsavers_sp-3_thumb.webp`,
		},
		{
			title: "お問い合わせページ (SP)",
			src: `${SP_IMAGE_PATH}/wellsavers_sp-4.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/wellsavers_sp-4_thumb.webp`,
		},
		{
			title: "グローバルナビゲーション (SP)",
			src: `${SP_IMAGE_PATH}/wellsavers_sp-5.webp`,
			thumbnailSrc: `${SP_IMAGE_PATH}/wellsavers_sp-5_thumb.webp`,
		},
	],
};
