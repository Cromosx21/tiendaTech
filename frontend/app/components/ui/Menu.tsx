"use client";

import { useState } from "react";
import { Anchor, AnchorIcon } from "./Anchors";


export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	// Lista de categorías del menu principal
	// const categories = ["Vuelta a casa","Arma tu PC","Asesórate Online","Zona Gamer","Servicios","Tiendas", "Seguir mi pedido", "Contacto"];
	const categories: Record<string, string> = {
		"Vuelta a casa": "/categorias",
		"Arma tu PC": "/categorias",
		"Asesórate Online": "/categorias",
		"Zona Gamer": "/categorias",
		Servicios: "/categorias",
		Tiendas: "/categorias",
		"Seguir mi pedido": "/categorias",
		Contacto: "/categorias",
	};

	return (
		<nav className="flex flex-row items-center max-w-7xl mx-auto">
			{isOpen && (
				<div
					id="sub_menu"
					className="fixed left-0 top-0 w-screen min-h-screen h-full py-50 bg-[#04040420] z-10"
					onClick={() => setIsOpen(false)}
				>
					<div
						className="bg-gray-100 relative max-w-7xl h-96 mx-auto py-3 px-3 rounded-sm "
						onClick={(e) => e.stopPropagation()}
					>
						<p>Categorías de productos </p>
					</div>
				</div>
			)}
			<AnchorIcon
				name="Todas las Categorías"
				onClick={() => setIsOpen(!isOpen)}
			/>
			{Object.keys(categories).map((category) => (
				<Anchor
					key={category}
					name={category}
					route={categories[category]}
				/>
			))}
		</nav>
	);
}