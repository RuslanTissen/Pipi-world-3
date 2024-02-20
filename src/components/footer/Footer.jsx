import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaWhatsapp, FaInstagram} from 'react-icons/fa'
import { SiGmail, SiUpwork } from "react-icons/si";
import { IoDiamondSharp } from "react-icons/io5";
// import trans from '../Translate.js';


import trans from '../Translate.js';
import { Context } from '../Context'

import "./Footer.scss"

function Footer() {
	const { lang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='footer'>
			<div className="footer__operation footer__operation--block">
				<h3>HOURS OF OPERATION </h3>

				<p>Mon-Thu: 9AM to 8PM</p>
				<p>Friday: 9AM to 3PM</p>
				<p>Sat-Sun: Closed</p>

			</div>

			<div className="footer__contact footer__operation--block">
				<h3>CONTACT ME</h3>

				<p>500 Terry Francine Street</p>
				<p>San Francisco, CA 94158</p>
				<p className='empty_line'> - </p>
				<p>Mail: info@mysite.com</p>
				<p>Tel: 123-456-7890</p>

			</div>
			
			<div className="footer__menu footer__operation--block">
				<h3>MENU</h3>

				<p><IoDiamondSharp /> About</p>
				<p><IoDiamondSharp /> Services</p>
				<p><IoDiamondSharp /> Plans</p>
				<p><IoDiamondSharp /> Online Programs</p>
				<p><IoDiamondSharp /> Contact</p>

				<NavLink className="footer__menu--link-to-contact" to="Contact" onClick={scrollToTheTop}>{trans[lang].footerContact}</NavLink>
			</div>

			<div className="footer__logo footer__operation--block">
				<h2 className='footer__logo--logo-box' ><NavLink to="*" onClick={scrollToTheTop}><span>PIPI` <IoDiamondSharp /></span>SPORTS  <span />PHILOSOPHY <span /></NavLink></h2>

				<div className="footer__logo--social-container">
					<NavLink className='footer__logo--social-container-link' to="Contact" onClick={scrollToTheTop}><SiGmail /></NavLink>
					<a className='footer__logo--link-whatsapp' href='https://wa.me/14155797059' target='_blank'><FaWhatsapp /></a>
					<a className='footer__logo--social-container-link' href='https://www.upwork.com/freelancers/~01fe4cfc87ce82d6a8' target='_blank'><SiUpwork /></a>
					<a className='footer__logo--social-container-link' href='https://www.instagram.com/pipitosti/' target='_blank'><FaInstagram /></a>
				</div>

				<p>© 2024 by TISSEN  Powered</p>
			</div>
		</div>
	)
}

export default Footer