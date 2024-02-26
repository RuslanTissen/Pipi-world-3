import React from 'react'
import "./Pricing.scss"
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'


function Pricing() {
	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='success' id='pricing'>

			<div className="success-title-box">
				<div className="success-title-box-cont">
					<p className="success-title-box--title">Services</p>
					<div className="success-title-box--underline-dig"></div>
					<div className="success-title-box--underline-thin"></div>
				</div>
			</div>

			<div className="success__img-block"></div>

			<div className="success__price-1">

				<div className="price__box"><span>$</span><span>200</span> </div>
				<p>4 weeks</p>
				<div className="success__price--button">
					<NavLink className="success__price--button-text" to="Contact" onClick={scrollToTheTop}>Book now </NavLink>
					<NavLink className="success__price--button-arrow" to="Contact" onClick={scrollToTheTop}><FaArrowRight /> </NavLink>
				</div>

				<div className="success__price--text-box">
					<ul>
						<li>nutrition plan</li>
						<li>gym planification</li>
						<li>learn about rehabilitation and stretching</li>
						<li>build visualization</li>
						<li>goal-setting techniques</li>
					</ul>
				</div>

			</div>

			<div className="success__price-2">
				<div className="price__box"><span>$</span><span>500</span> </div>
				<p>8 weeks</p>
				<div className="success__price--button">
					<NavLink className="success__price--button-text" to="Contact" onClick={scrollToTheTop}>Book now </NavLink>
					<NavLink className="success__price--button-arrow" to="Contact" onClick={scrollToTheTop}><FaArrowRight /> </NavLink>
				</div>
				<div className="success__price--text-box">
					<ul>
						{/* <li>Build Visualization and Goal-Setting Techniques</li> */}
						<li>Narrow Your Focus</li>
						<li>Gain Access to 10 Success Modules</li>
						<li>Improve Motivation and Team-Building Skills</li>
						<li>Conquer Anxiety</li>
						<li>Learn the Art of Rehabilitation</li>
					</ul>
				</div>
			</div>

		</div>
	)
}

export default Pricing