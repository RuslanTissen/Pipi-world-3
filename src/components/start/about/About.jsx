import React from 'react'
import "./About.scss"
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function About() {
	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className="about__container">

			<div className="about__container--text-container">
				<div className="about__container--text-container--box">
					<p className="about__container--text-container__title"><span>meet your </span> <span>coach</span></p>
					<div className="about__container--text-container__underline-dig"></div>
					<div className="about__container--text-container__underline-thin"></div>
					<div className="about__container--text-container__text-about">What type of body makes you happy?
						What skin do you feel comfortable in? What training awakens... passion in me?
						As a woman with social media, I had to understand pretty soon that the only body that matters must be mine but that journey took me through almost 10 years of coaching, nutritionists, and books really different in between.
						The first questions bring me light on my darkest moments and now I want to push people to the bright side of fitness.
					</div>
					<div className="about__container--button">
						<NavLink className="about__container--button-text" to="Contact" onClick={scrollToTheTop}>Contact now </NavLink>
						<NavLink className="about__container--button-arrow" to="Contact" onClick={scrollToTheTop}><FaArrowRight /> </NavLink>
					</div>
				</div>
			</div>

			<div className="about__container--image-container">

			</div>
		</div>
	)
}

export default About