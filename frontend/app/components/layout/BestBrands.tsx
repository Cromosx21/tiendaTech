import HeadingSection from "../ui/HeadingSection"
import Image from "next/image"
import Link from "next/link"
import { RocketIcon } from "../ui/Icons"

const imagesSmall = [
    "firts_product.png",
    "firts_product.png",
    "firts_product.png",
    "firts_product.png"
]

const imagesBig = [
    "second_product.png",
    "second_product.png",
]

async function BestBrands() {
    return (
		<>
			<section className="max-w-7xl mx-auto flex gap-4 flex-col py-8">
				<HeadingSection
					name="Las Mejores Marcas"
					icon={<RocketIcon />}
				/>
				<div className="grid grid-cols-6 gap-2 grid-rows-2">
					{/* Small image grid position */}
					<Link
						href="/"
						className="hover:brightness-75 transition-all duration-500 ease-in-out col-start-1 row-start-1"
					>
						<Image
							src={`/images/bestProducts/firts_product.png`}
							alt="logo"
							width={300}
							height={700}
							className=""
						/>
					</Link>
					<Link
						href="/"
						className="hover:brightness-75 transition-all duration-500 ease-in-out col-start-2 row-start-1"
					>
						<Image
							src={`/images/bestProducts/firts_product.png`}
							alt="logo"
							width={300}
							height={600}
							className=" "
						/>
					</Link>
					<Link
						href="/"
						className="hover:brightness-75 transition-all duration-500 ease-in-out col-start-1 row-start-2 "
					>
						<Image
							src={`/images/bestProducts/firts_product.png`}
							alt="logo"
							width={300}
							height={600}
							className=""
						/>
					</Link>
					<Link
						href="/"
						className="hover:brightness-75 transition-all duration-500 ease-in-out col-start-2 row-start-2 "
					>
						<Image
							src={`/images/bestProducts/firts_product.png`}
							alt="logo"
							width={300}
							height={600}
							className=""
						/>
					</Link>

					{/* Big image grid position */}
					<Link
						href="/"
						className="hover:brightness-75 transition-all duration-500 ease-in-out col-start-3 row-start-1 col-span-2 row-span-2"
					>
						<Image
							src={`/images/bestProducts/second_product.png`}
							alt="logo"
							width={500}
							height={800}
							className=""
						/>
					</Link>
					<Link
						href="/"
						className="hover:brightness-75 transition-all duration-500 ease-in-out col-start-5 row-start-1 col-span-2 row-span-2"
					>
						<Image
							src={`/images/bestProducts/second_product.png`}
							alt="logo"
							width={500}
							height={800}
							className=""
						/>
					</Link>
				</div>
			</section>
		</>
	);
}

export default BestBrands