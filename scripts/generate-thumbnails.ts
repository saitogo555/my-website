import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import sharp from "sharp";

// ANSI カラーコードの定義
const RESET = "\x1b[0m";
const BLUE = "\x1b[34m";
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";

// ESM環境での__dirnameの定義
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// サムネイル生成設定のインターフェース
interface Config {
	thumbnailWidth: number; // サムネイルの幅（ピクセル単位）
	aspectRatio: string; // アスペクト比（例: "16:9"）
	extensions: string[]; // 対象とする画像の拡張子
}

// サムネイル生成の設定値
const config: Config = {
	thumbnailWidth: 500, // サムネイルの幅
	aspectRatio: "16:9", // デフォルトのアスペクト比。変更すれば好みの比率にできます。
	extensions: ["webp"], // 処理対象の画像拡張子
};

/**
 * アスペクト比文字列（例: "16:9"）を数値に変換する関数
 * @param ratioStr アスペクト比文字列
 * @returns アスペクト比（横/縦 の値）
 */
function parseAspectRatio(ratioStr: string): number {
	const parts = ratioStr.split(":");
	return Number.parseFloat(parts[0]) / Number.parseFloat(parts[1]);
}

// 元画像が格納されているディレクトリ（サブディレクトリも含む）
const inputDir = path.join(__dirname, "..", "public", "images", "works");

/**
 * 指定された画像ファイルを処理し、設定されたアスペクト比のサムネイルを生成して
 * 元の画像と同じディレクトリに保存します。
 * 既にサムネイルが存在する場合は削除してから再生成します。
 *
 * @param file 処理対象の画像ファイルのパス
 * @returns プロミス（非同期処理）
 */
function processImage(file: string): Promise<void> {
	const parsedPath = path.parse(file);

	// 既にサムネイル化されたファイル（名前に "_thumb" が含まれるもの）は対象外
	if (parsedPath.name.endsWith("_thumb")) {
		return Promise.resolve();
	}

	const ext = parsedPath.ext.slice(1).toLowerCase();
	// 対象の拡張子でなければ処理を中断
	if (!config.extensions.includes(ext)) {
		return Promise.resolve();
	}

	// サムネイルの出力ファイル名例: example_thumb.jpg
	const outputFileName = `${parsedPath.name}_thumb${parsedPath.ext}`;
	const outputPath = path.join(parsedPath.dir, outputFileName);

	// 既にサムネイルが存在する場合は削除して再生成
	if (fs.existsSync(outputPath)) {
		console.log(`${BLUE}サムネイルが既に存在します。再生成します: ${outputPath}${RESET}`);
		fs.unlinkSync(outputPath);
	} else {
		console.log(`${BLUE}サムネイルが存在しません。生成します: ${outputPath}${RESET}`);
	}

	// config.aspectRatio を使って、ターゲットとなる高さを計算
	const aspect = parseAspectRatio(config.aspectRatio);
	const targetHeight = Math.round(config.thumbnailWidth / aspect);

	// sharpを用いてリサイズとクロップを行い、JPEG形式で保存
	return sharp(file)
		.resize(config.thumbnailWidth, targetHeight, {
			fit: "cover", // 画像をカバーするようにリサイズし、余分な部分を切り抜く
			position: "top", // 上部を基準に切り抜く
		})
		.jpeg({ quality: 80 }) // JPEG品質を80に設定
		.toFile(outputPath)
		.then(() => {
			console.log(`${GREEN}サムネイル生成完了: ${outputPath}${RESET}`);
		})
		.catch((error) => {
			console.error(
				`${RED}ファイル ${parsedPath.base} の処理中にエラーが発生しました: ${error}${RESET}`,
			);
		});
}

// メイン処理を非同期関数として定義
async function main() {
	try {
		const files = await glob(`${inputDir}/**/*.+(${config.extensions.join("|")})`);
		await Promise.all(files.map((file) => processImage(file)));
		console.log(`${GREEN}全てのサムネイル生成が完了しました。${RESET}`);
	} catch (err) {
		console.error(`${RED}エラーが発生しました: ${err}${RESET}`);
	}
}

// メイン処理を実行
main();
