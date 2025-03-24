import { useRouter } from "next/navigation";
import type { BaseCommand } from "./commands/BaseCommand";
import { CdCommand } from "./commands/CdCommand";

export const useTerminalManager = () => {
	const router = useRouter();
	const commands: BaseCommand[] = [new CdCommand(router)];

	const execute = (command: string, ...args: string[]) => {
		const cmd = commands.find((c) => c.getName() === command || c.getAliases().includes(command));
		if (!cmd) {
			console.error(`command not found: ${command}`);
			return;
		}
		cmd.execute(...args);
	};

	return { execute };
};
