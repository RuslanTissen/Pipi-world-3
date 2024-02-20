import React from 'react'
import "./Success.scss"
import { NavLink } from 'react-router-dom'

function Success() {
	return (
		<div className='success'>

			<div className="success__bckgrd-block"></div>

			<div className="success__cont">
				
				<div className="success__cont--1">
					<h4>SUCCESS MINDSET</h4>
					<div className="price_box"><span>$</span> 800</div>
					<h6>12 Week Intensive Program</h6>
					<p>Valid for 12 weeks</p>
					<NavLink className='success__link'>SELECT</NavLink>
				</div>

				<div className="success__cont--2">

					<ul>
						<li>Build Visualization and Goal-Setting Techniques</li>
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

export default Success