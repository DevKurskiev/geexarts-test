import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Header from '../../components/Header/Header.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'

import { arrow } from '../../assets/index.js'

import './Slider.scss'

import 'swiper/css'

const Slider = ({ allItems }) => {
	let { id } = useParams()
	const swiperRef = useRef(null)

	const handleNextButtonClick = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext()
		}
	}

	const handlePrevButtonClick = () => {
		if (swiperRef.current) {
			swiperRef.current.slidePrev()
		}
	}

	return (
		<div className='wrapper'>
			<Sidebar isSlider={true} />
			<div className='slider'>
				<Header />
				<Swiper
					slidesPerView={3}
					spaceBetween={140}
					className='mySwiper'
					initialSlide={id}
					loop={true}
					centeredSlides={true}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}}
					modules={[Navigation]}
					ref={swiperRef}
				>
					{allItems.map(item => (
						<SwiperSlide
							key={item.id}
							style={{
								background: `url(${item.img})`
							}}
						>
							<div className='slide-text'>Introduction</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className='navigation'>
				<button className='swiper-button-prev' onClick={handlePrevButtonClick}>
					<img src={arrow} alt='arrow' />
				</button>
				<button className='swiper-button-next' onClick={handleNextButtonClick}>
					<img src={arrow} alt='arrow' />
				</button>
			</div>
		</div>
	)
}

export default Slider
