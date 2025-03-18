import { LaptopIcon } from "./Icons"


async function BannerPromotion() {
    return (
		<div className="w-full bg-gray-700">
			<div className="max-w-7xl mx-auto">
				<p className="flex items-center gap-2 py-2 text-sm justify-center text-lime-300">
					<LaptopIcon />
					<strong className="font-bold">
						DELIVERY GRATIS EN TODA LA WEB
					</strong>
					<span className="text-gray-50">por compras mayores a s/ 700 para todo Lima</span>
					<LaptopIcon />
				</p>
			</div>
		</div>
	);
    
}

export default BannerPromotion