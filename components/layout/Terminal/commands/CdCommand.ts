import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { BaseCommand } from "./BaseCommand";

export class CdCommand extends BaseCommand {
  private router: AppRouterInstance

  constructor(router: AppRouterInstance) {
    super();
    this.router = router;
  }

  getName(): string {
    return "cd";
  }
  
  getDescription(): string {
    return "Changes the current directory.";
  }

  getUsage(): string {
    return "cd <directory>";
  }

  getAliases(): string[] {
    return [];
  }

  execute(...args: string[]): void {
    const path = args[0];
    if (!path) {
      this.router.push("/");
      return;
    }
    this.router.push(path);
  }
}