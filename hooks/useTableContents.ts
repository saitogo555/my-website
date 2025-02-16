import type { AnchorLink } from "@/types/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const useTableOfContents = () => {
	const [toc, setToc] = useState<AnchorLink[]>([]);
	const pathname = usePathname();

	// biome-ignore lint/correctness/useExhaustiveDependencies: ページ遷移時に実行したいのでpathname変数を依存リストに追加
	const generateTableOfContents = useCallback(() => {
		const headings = document.querySelectorAll("[data-anchor-link]");
		const tocItems: AnchorLink[] = Array.from(headings).map((heading, i) => {
			const dataAttr = heading.getAttribute("data-anchor-link") ?? `toc-${i}`;
			if (!heading.id) {
				heading.id = dataAttr.replace(/\s+/g, "-");
			}

			return {
				text: heading.getAttribute("data-anchor-link") ?? "",
				to: `#${heading.id}`,
			};
		});

		setToc(tocItems);
	}, [pathname]);

	useEffect(() => {
		generateTableOfContents();
	}, [generateTableOfContents]);

	return toc;
};
