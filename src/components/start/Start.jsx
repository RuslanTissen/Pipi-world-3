import React from 'react'
import "./Start.scss"
import Introduction from './introduction/Introduction'  
import About from './about/About.jsx'
import MeetPipi from './meetPipi/MeetPipi.jsx'
// import Clients from './clients/Clients.jsx';
import Services from './services/Services.jsx';
import Motto from './motto/Motto.jsx'
import Pricing from './pricing/Pricing.jsx'

function Start() {
	return (
		<div className='starts'>
			<Introduction />

			<About />

			{/* <MeetPipi /> */}

			<Pricing />

			{/* <Clients /> */}

			{/* <Services /> */}

			<Motto/>

		</div>
	)
}

export default Start


