"use client";

// import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";


const images = [
    "slide_1.jpg",
    "slide_2.jpg",
    "slide_3.jpg",
    "slide_4.jpg",
    "slide_5.jpg",
    "slide_6.jpg",
    "slide_7.jpg",
    "slide_8.jpg"
]

export default function Slider() {
    return (
		<>
			<div className="w-full relative">
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={0}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 3000 }}
					speed={600}
					className="w-full h-full"
					loop={true}
				>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<Image
								key={index}
								src={`/images/slider/${image}`}
								alt="Imagen de promoción"
								width={1920}
								height={600}
							/>
						</SwiperSlide>
					))}

				</Swiper>
			</div>
		</>
	);
}