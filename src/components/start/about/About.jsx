import React from 'react'
import "./About.scss"

function About() {
	return (
		<div className="about__container">

			<div className="about__container--text-container">
				<div className="about__container--text-container--box">
					<p className="about__container--text-container__title"><span>MY</span> <span>PHILOSOPHY</span></p>
					<div className="about__container--text-container__underline-dig"></div>
					<div className="about__container--text-container__underline-thin"></div>
					<div className="about__container--text-container__text-about">It is an interplay that is as fascinating as it is complex: muscles, joints and the spine keep us flexible and do everything we want to.
						Almost as if by itself. But if something gets "messed up" in this system, it can have painful and even chronic effects on the entire body.
						Often also on our entire life. As a coach, it is my job to minimize these effects or, at best, to prevent them entirely through targeted prevention.</div>
				</div>
			</div>

			<div className="about__container--image-container">

			</div>
		</div>
	)
}

export default About