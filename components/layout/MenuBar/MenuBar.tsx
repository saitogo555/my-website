"use client";

import { GITHUB_LINK, GRAVATAR_LINK, LINKEDIN_LINK, NPM_LINK, X_LINK, ZENN_LINK } from "@/constants/links";
import { cn } from "@/utils";
import { type RefObject, createRef, useCallback, useEffect, useRef, useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { VscMenu } from "react-icons/vsc";
import { MenuIcon } from "./MenuIcon";
import { MenuItem } from "./MenuItem";
import { OverflowMenu } from "./OverflowMenu";

type Props = {
	className: string;
};

type MenuItemType = {
	text: string;
	iconSrc: string;
	href: string;
};

const items: MenuItemType[] = [
	{
		text: GITHUB_LINK.text,
		iconSrc: "/images/logo/github-logo.svg",
		href: GITHUB_LINK.href,
	},
	{ text: X_LINK.text, iconSrc: "/images/logo/x-logo.svg", href: X_LINK.href },
	{ text: LINKEDIN_LINK.text, iconSrc: LINKEDIN_LINK.iconSrc, href: LINKEDIN_LINK.href },
	{ text: NPM_LINK.text, iconSrc: "/images/logo/npm-logo.svg", href: NPM_LINK.href },
	{ text: ZENN_LINK.text, iconSrc: "/images/logo/zenn-logo.svg", href: ZENN_LINK.href },
	{ text: GRAVATAR_LINK.text, iconSrc: GRAVATAR_LINK.iconSrc, href: GRAVATAR_LINK.href },
];

export const MenuBar = ({ className }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [overflowItems, setOverflowItems] = useState<MenuItemType[]>([]);
	const menuRef = useRef<HTMLUListElement>(null);
	const itemsRef = useRef<RefObject<HTMLLIElement | null>[]>(
		items.map(() => createRef<HTMLLIElement | null>()),
	);
	const btnRef = useRef<HTMLLIElement>(null);

	const handleToggleOpen = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	const handleClickOutsideButton = useCallback((e: MouseEvent) => {
		if (btnRef.current && !btnRef.current.contains(e.target as Node)) {
			setIsOpen(false);
		}
	}, []);

	const handleResize = useCallback(() => {
		if (!menuRef.current || !btnRef.current) {
			return;
		}

		btnRef.current.style.display = "block";
		let totalWidth: number = btnRef.current.offsetWidth ?? 0; // メニューアイテムの横幅の合計
		const menuWidth: number = menuRef.current.offsetWidth;
		const newOverflowItems: MenuItemType[] = [];

		btnRef.current.style.display = "";
		for (const itemRef of itemsRef.current) {
			if (!itemRef.current) {
				continue;
			}
			itemRef.current.style.display = "flex";
		}
		itemsRef.current.forEach((itemRef, i) => {
			if (!itemRef.current) {
				return;
			}

			totalWidth += itemRef.current.offsetWidth;
			if (totalWidth > menuWidth) {
				newOverflowItems.push(items[i]);
				itemRef.current.style.display = "none";
			}
		});

		if (items.length - newOverflowItems.length <= 2) {
			for (const itemRef of itemsRef.current) {
				if (!itemRef.current) {
					continue;
				}
				itemRef.current.style.display = "none";
			}
			setOverflowItems(items);
		} else {
			setOverflowItems(newOverflowItems);
		}
		setIsOpen((prevIsOpen) => (newOverflowItems.length > 0 ? prevIsOpen : false));
	}, []);

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		document.addEventListener("click", handleClickOutsideButton);

		return () => {
			window.removeEventListener("resize", handleResize);
			document.removeEventListener("click", handleClickOutsideButton);
		};
	}, [handleResize, handleClickOutsideButton]);

	return (
		<ul className={cn("flex py-1", className)} ref={menuRef}>
			{items.map((item, i) => (
				<MenuItem className="hidden" ref={itemsRef.current[i]} key={i.toString()}>
					<a
						className="flex items-center px-2"
						href={item.href}
						title={item.text}
						aria-label={item.text}
						target="_blank"
						rel="noopener noreferrer"
					>
						{item.text}
						<span className="text-xs">(</span>
						<MenuIcon iconSrc={item.iconSrc} alt={`${item.text} icon`} />
						<span className="text-xs">)</span>
					</a>
				</MenuItem>
			))}
			<MenuItem
				className={cn(
					"relative z-50",
					{ "bg-neutral-300/10": isOpen },
					{ invisible: overflowItems.length === 0 },
				)}
				ref={btnRef}
				onClick={handleToggleOpen}
			>
				<button className={cn("cursor-pointer px-2 text-xl", "max-medium:text-3xl")} type="button">
					{overflowItems.length === items.length ? <VscMenu /> : <RxDotsHorizontal />}
				</button>
				{isOpen && <OverflowMenu items={overflowItems} />}
			</MenuItem>
		</ul>
	);
};
