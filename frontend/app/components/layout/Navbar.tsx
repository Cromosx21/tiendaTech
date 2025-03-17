
import Image from "next/image";
import { SearchIcon } from "../ui/Icons";
import { Anchor, AnchorIcon } from "../ui/Anchors";
import { use } from "react";

export default function Navbar() {
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
		<>
			<div className="w-full">
				<div className="border-b border-gray-400">
					<p className="py-2 max-w-7xl mx-auto text-gray-600">
						Bienvenidos a Tienda Tech
					</p>
				</div>
				<div className="max-w-7xl mx-auto flex flex-col">
					<div className="py-8 flex flex-row items-center gap-6">
						<Image
							src="/images/logos/logo.svg"
							alt="logo"
							width={196}
							height={100}
						/>
						<form
							action=""
							className="border-4 border-green-500 rounded-sm flex flex-row items-center"
						>
							<input
								className="py-1.5 px-4 outline-none text-lg text-gray-600 placeholder:text-blue-900 w-lg min-w-xs max-w-lg inset-shadow-sm inset-shadow-gray-300"
								type="text"
								name="search"
								placeholder="Buscar aquí..."
								id=""
								autoComplete=" on"
							/>
							<button
								type="submit"
								className="p-2 bg-green-500 text-gray-50 cursor-pointer"
							>
								<SearchIcon />
							</button>
						</form>
					</div>
				</div>
                <div className=" bg-blue-600 relative">

                    <div id="sub_menu" popover="auto" className="absolute w-screen h-screen bg-[#04040420]">
                        <div className="bg-gray-100 relative max-w-6xl h-96 top-1/2 mx-auto -translate-y-1/2" >
                            <p>Categorías de productos </p>
                        </div>
                    </div>
					<nav className="flex flex-row items-center max-w-7xl mx-auto">
						<AnchorIcon name="Todas las Categorías"  />
						{Object.keys(categories).map((category) => (
							<Anchor
								key={category}
								name={category}
								route={categories[category]}
							/>
						))}
					</nav>
				</div>
			</div>
		</>
	);
}
