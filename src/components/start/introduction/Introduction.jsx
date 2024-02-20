import React, { useRef } from 'react'
import "./Introduction.scss"
import { FaWhatsapp, FaInstagram, FaArrowRight } from 'react-icons/fa'
import { SiGmail, SiUpwork } from "react-icons/si";
import { Context } from '../../Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
// import trans from '../../Translate.js';

function Introduction() {
	const { lang, setLang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className="introduction__container">
			<div className="introduction__container--social-media">
				<div className="introduction__container--social-media--link-container">
					<NavLink className='introduction__container--social-media__links' to="Contact" onClick={scrollToTheTop}><SiGmail /></NavLink>
					<a className='introduction__container--social-media__links' href='https://wa.me/14155797059' target='_blank'><FaWhatsapp /></a>
					<a className='introduction__container--social-media__links' href='https://www.upwork.com/freelancers/~01fe4cfc87ce82d6a8' target='_blank'><SiUpwork /></a>
					<a className='introduction__container--social-media__links' href='https://www.instagram.com/pipitosti/' target='_blank'><FaInstagram /></a>
				</div>
				<div className="introduction__container--social-media--scroll-container">
					<p>SCROLL <FaArrowRight /></p>
				</div>
			</div>
			<p className='introduction__container--moto'>Maximize Your Full Potential.</p>
			<p className='introduction__container--moto-italice'>Take control of your body through discipline</p>
			<div className="introduction__container--button">
				<NavLink className="introduction__container--button-text" to="Contact" onClick={scrollToTheTop}>Book now </NavLink>
				<NavLink className="introduction__container--button-arrow" to="Contact" onClick={scrollToTheTop}><FaArrowRight /> </NavLink>
			</div>
		</div>
	)
}

export default Introduction