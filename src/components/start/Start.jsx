import React from 'react'
import "./Start.scss"
import Introduction from './introduction/Introduction'  
import About from './about/About.jsx'
import Contact from './contact/Contact.jsx';
import Straching from './straching/Straching.jsx';
import Pricing from './pricing/Pricing.jsx'

function Start() {
	return (
		<div className='starts'>
			<Introduction />

			<About />

			<Pricing />

			<Straching />

			<Contact />

		</div>
	)
}

export default Start


