import React from 'react'
import "./Services.scss"
import Exercises from './Exercises'
import { NavLink } from 'react-bootstrap'

function Services() {
	return (
		<div className='service'>
			<div className="service__title-box">
				<p className="service__title-box--title">OUR SERVICES</p>
				<div className="service__title-box--underline-dig"></div>
				<div className="service__title-box--underline-thin"></div>
				<NavLink className='service__link'>VIEW ALL</NavLink>
			</div>

			<Exercises
				exeImg={`img1`}
				exeTitle={`INDIVIDUAL SESSIONS`}
				exeText={`This 1-on-1 session is built for individual athletes`}
				
			/>
			<Exercises
				exeImg={`img1`}
				exeTitle={`GROUP SESSIONS`}
				exeText={`Create winning chemistry for your team`}
			/>
			<Exercises
				exeImg={`img1`}
				exeTitle={`WORKSHOPS & PRESENTATIONS`}
				exeText={`Education for athletes, teams and coaches.`}
			/>
		</div>
	)
}

export default Services