import React, { useContext } from 'react'
import "./About.scss"
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { Context } from '../../Context.js'
import trans from '../../Translate.js'

function About() {
	const { lang} = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className="about__container" id='coach'>

			<div className="about__container--text-container">
				<div className="about__container--text-container--box">
					<p className="about__container--text-container__title"><span>{trans[lang].aboutTitle} </span> <span>{trans[lang].coach}		</span></p>
					<div className="about__container--text-container__underline-dig"></div>
					<div className="about__container--text-container__underline-thin"></div>
					<div className="about__container--text-container__text-about">{trans[lang].aboutText}
					</div>
					<div className="about__container--button">
						<NavLink className="about__container--button-text" to="Contact" onClick={scrollToTheTop}>{trans[lang].aboutContact} <FaArrowRight /> </NavLink>
						{/* <NavLink className="about__container--button-arrow" to="Contact" onClick={scrollToTheTop}><FaArrowRight /> </NavLink> */}
					</div>
				</div>
			</div>

			<div className="about__container--image-container">

			</div>
		</div>
	)
}

export default About