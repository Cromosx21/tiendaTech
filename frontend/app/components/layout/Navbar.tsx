
import Image from "next/image";
import { SearchIcon } from "../ui/Icons";
import Menu from "../ui/Menu";
import BannerPromotion from "../ui/BannerPromotion";

async function Navbar() {
	

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
                <div className=" bg-blue-600">
					<Menu />
				</div>
				<BannerPromotion />
			</div>
		</>
	);
}


export default Navbar;