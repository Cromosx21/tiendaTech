"use client";
import Link from "next/link";
import { HamburgerIcon } from "./Icons";
import { useState } from "react";

interface AnchorProps {
	name: string;
	route: string;
}

const Anchor = ({ name, route }: AnchorProps) => {
	return (
		<Link
			href={route}
			className="bg-green-500 py-3 px-5 text-gray-50 font-bold"
		>
			{name}
		</Link>
	);
};

const AnchorIcon = ({ name }: { name: string }) => {
	const [open, setOpen] = useState(false);
	return (
		<button
			type="button"
            className="flex flex-row items-center text-gray-50 font-bold py-3 pr-5 gap-1 cursor-pointer outline-none"
            popoverTarget="sub_menu"
			onClick={() => setOpen(!open)}
		>
			<HamburgerIcon />
			<span>{name}</span>
		</button>
	);
};

export { Anchor, AnchorIcon };
