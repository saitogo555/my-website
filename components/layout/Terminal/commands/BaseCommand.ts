export abstract class BaseCommand {
  /**
   * コマンド名を返す
   * @returns {string}
   */
	abstract getName(): string;

	/**
	 * コマンドの説明を返す
	 * @returns {string}
	 */
	abstract getDescription(): string;

	/**
	 * コマンドの使用法を返す
	 * @returns {string}
	 */
	abstract getUsage(): string;

  /**
   * コマンドのエイリアスを返す
   * @returns {string[]}
   */
	abstract getAliases(): string[];

  /**
   * コマンドを実行する
   * @param {string[]} args
   * @returns {void}
   */
	abstract execute(...args: string[]): void;
}
