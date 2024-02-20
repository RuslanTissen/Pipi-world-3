import React from 'react'
import "./Clients.scss"

function Clients() {
	return (
		<div className='clients'>
			<div className="clients__title-box">
				<p className="clients__title-box--title">OUR CLIENTS</p>
				<div className="clients__title-box--underline-dig"></div>
				<div className="clients__title-box--underline-thin"></div>
			</div>
			<div className="clients__names">
				<div className="clients__names--1  clnts__nm">NYLM</div>
				<div className="clients__names--2  clnts__nm">PBM</div>
				<div className="clients__names--3  clnts__nm">TBS</div>
				<div className="clients__names--4  clnts__nm">JL</div>
				<div className="clients__names--5  clnts__nm">baseball</div>
			</div>
		</div>
	)
}

export default Clients