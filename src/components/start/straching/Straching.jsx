import React from 'react'
import "./Straching.scss"
import { FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-bootstrap'

function Straching() {
	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className="straching" id='straching'>

			<div className="straching__image-container">			</div>

			<div className="straching__text-container">
				<div className="straching__text-container--box">
					<p className="straching__text-container--title"><span>stretching  </span> <span>course</span></p>
					<div className="straching__text-container--underline-dig"></div>
					<div className="straching__text-container--underline-thin"></div>
					<div className="straching__text-container--text-about">The Stretching Course, developed by Pipi, offers a unique approach to improving flexibility and well-being.
						With Pipi's expertise, participants are guided through innovative stretching techniques designed to enhance range of motion and reduce muscle tension.
						This course empowers individuals to prioritize self-care and unlock their body's potential for improved mobility and overall health.
					</div>
					<div className="straching__button">
						<NavLink className="straching__button--text" to="Contact" onClick={scrollToTheTop}>Book now </NavLink>
						<NavLink className="straching__button--arrow" to="Contact" onClick={scrollToTheTop}><FaArrowRight /> </NavLink>
					</div>

					<div className="straching__price-box"><span>$</span><span>25</span> </div>
					<p className='straching__languages'>Available in both Spanish and English</p>
				</div>
			</div>

		</div>
	)
}

export default Straching


// <div className='service'>
// 	<div className="service__title-box">
// 		<p className="service__title-box--title">OUR SERVICES</p>
// 		<div className="service__title-box--underline-dig"></div>
// 		<div className="service__title-box--underline-thin"></div>
// 		<NavLink className='service__link'>VIEW ALL</NavLink>
// 	</div>

// 	<Exercises
// 		exeImg={`img2`}
// 		exeTitle={`WORKSHOPS & PRESENTATIONS`}
// 		exeText={`Education for athletes, teams and coaches.`}
// 	/>
{/* <Exercises
			exeImg={`img1`}
			exeTitle={`INDIVIDUAL SESSIONS`}
			exeText={`This 1-on-1 session is built for individual athletes`}
			
		/> */}

{/* <Exercises
			exeImg={`img1`}
			exeTitle={`GROUP SESSIONS`}
			exeText={`Create winning chemistry for your team`}
		/> */}
// </div>