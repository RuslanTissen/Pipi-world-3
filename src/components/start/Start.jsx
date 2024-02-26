import React from 'react'
import "./Start.scss"
import Introduction from './introduction/Introduction'  
import About from './about/About.jsx'
import MeetPipi from './meetPipi/MeetPipi.jsx'
// import Clients from './clients/Clients.jsx';
import Straching from './straching/Straching.jsx';
import Motto from './motto/Motto.jsx'
import Pricing from './pricing/Pricing.jsx'

function Start() {
	return (
		<div className='starts'>
			<Introduction />

			<About />

			<Straching />

			<Pricing />

			<Motto/>

			{/* <Clients /> */}
			{/* <MeetPipi /> */}


		</div>
	)
}

export default Start


