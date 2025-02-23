import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import sharp from "sharp";

// ANSIカラーコード
const RESET = "\x1b[0m";
const BLUE = "\x1b[34m";
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";

// ESM環境での__dirnameの定義
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 変換設定
const config = {
	quality: 80, // WebP品質
	extensions: ["jpg", "jpeg", "png"], // 対象拡張子
	maxWidth: 1280, // 最大横幅
};

// 入力ディレクトリ
const inputDir = path.join(__dirname, "..", "public", "images");

// バックアップディレクトリの設定を追加
const backupDir = path.join(__dirname, "..", "public", "images", "_backup");

// バックアップディレクトリを作成する関数
function ensureBackupDir(originalPath: string): string {
	// 元のパスから相対パスを取得
	const relativePath = path.relative(inputDir, path.dirname(originalPath));
	// バックアップ先のフルパスを作成
	const backupPath = path.join(backupDir, relativePath);

	// バックアップディレクトリが存在しない場合は作成
	if (!fs.existsSync(backupPath)) {
		fs.mkdirSync(backupPath, { recursive: true });
	}

	return backupPath;
}

function processImage(file: string): Promise<void> {
	const parsedPath = path.parse(file);
	const outputPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

	if (fs.existsSync(outputPath)) {
		console.log(`${BLUE}WebPファイルが既に存在します。再生成します: ${outputPath}${RESET}`);
		fs.unlinkSync(outputPath);
	}

	return sharp(file)
		.metadata()
		.then((metadata) => {
			const width = metadata.width || 0;
			let sharpInstance = sharp(file);

			// 画像が1280pxより広い場合のみリサイズ
			if (width > config.maxWidth) {
				console.log(
					`${BLUE}画像をリサイズします（${width}px → ${config.maxWidth}px）: ${parsedPath.base}${RESET}`,
				);
				sharpInstance = sharpInstance.resize(config.maxWidth, null, {
					fit: "inside",
					withoutEnlargement: true,
				});
			}

			return sharpInstance.webp({ quality: config.quality }).toFile(outputPath);
		})
		.then(() => {
			console.log(`${GREEN}WebP生成完了: ${outputPath}${RESET}`);
			// バックアップディレクトリを作成し、元ファイルを移動
			const backupPath = ensureBackupDir(file);
			const backupFilePath = path.join(backupPath, path.basename(file));
			fs.renameSync(file, backupFilePath);
			console.log(`${BLUE}元ファイルをバックアップしました: ${backupFilePath}${RESET}`);
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
		console.log(`${GREEN}全てのWebP変換が完了しました。${RESET}`);
	} catch (err) {
		console.error(`${RED}エラーが発生しました: ${err}${RESET}`);
	}
}

// メイン処理を実行
main();
