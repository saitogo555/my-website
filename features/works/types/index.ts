type WorkRole = "フロントエンド" | "バックエンド" | "デザイン" | "運用・保守" | "その他";

type WorkTechnology = {
	name: string; // 技術名
	version?: string; // 使用されたバージョン
	iconSrc: string; // アイコンのURL
};

export type WorkImage = {
	src: string; // 画像のURL
	thumbnailSrc: string; // サムネイル画像のURL
	title: string; // 画像のタイトル
};

export type WorkData = {
	id: string; // ユニークなID
	title: string; // 実績のタイトル
	thumbnail: WorkImage; // サムネイル画像のURL
	summary: string; // 実績の要約説明
	details: string[]; // 実績の詳細説明
	roles: WorkRole[]; // 実績のラベル
	technologies: WorkTechnology[]; // 使用された技術やツールのリスト
	links: string[]; // 実績のリンクリスト
	images: WorkImage[]; // 実績に関連する画像のURLリスト
};
