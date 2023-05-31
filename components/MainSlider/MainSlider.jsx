import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import s from './MainSlider.module.scss'

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay]);

const MainSlider = ({ mainSliders }) => {
	const router = useRouter()
	return (
		<>
			<div className={s.main_slide}>

				<Swiper
					speed={2500}
					navigation={true}
					spaceBetween={40}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					modules={[Navigation]}
					style={{
						"--swiper-navigation-size": "22px",
					}}
					className="mainSliderSwiper">
					{mainSliders.map((slider) => {
						return (
							<SwiperSlide key={slider.id}>
								<Image src={slider.img} width={1140} height={450} alt='main_img'  />
								<div className={s.block}>
									<h1>{slider.title}</h1>
									<p>{slider.description}</p>
									<button onClick={() => router.push('/catalog')}>СМОТРЕТЬ КАТАЛОГ</button>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</>


	);
};

export default MainSlider;