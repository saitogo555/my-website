"use client";

import { cn } from "@/utils";

export function Copyright() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <div
      className={cn(
        "flex items-center gap-1 px-2 text-neutral-400 text-sm",
        "hover:bg-neutral-300/10",
        "max-medium:text-lg"
      )}
    >
      &copy; 2024-{year} SAITOGO
    </div>
  );
}
