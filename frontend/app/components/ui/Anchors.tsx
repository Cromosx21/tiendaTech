"use client";
import Link from "next/link";
import { HamburgerIcon } from "./Icons";
import { useState } from "react";
import { on } from "events";

interface AnchorProps {
	name: string;
	route: string;
}

const Anchor = ({ name, route }: AnchorProps) => {
	return (
		<Link
			href={route}
			className="bg-green-400 py-3 px-5 text-gray-50 font-bold hover:text-blue-600 transition-colors duration-300 ease-in-out"
		>
			{name}
		</Link>
	);
};

const AnchorIcon = ({ name, onClick }: { name: string, onClick: () => void }) => {
	return (
		<button
			type="button"
            className="flex flex-row items-center text-gray-50 font-bold py-3 pr-5 gap-1 cursor-pointer outline-none"
			popoverTarget="sub_menu"
			onClick={onClick}
		>
			<HamburgerIcon />
			<span>{name}</span>
		</button>
	);
};

export { Anchor, AnchorIcon };
