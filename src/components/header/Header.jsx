import React, { useState, useContext, useEffect, useRef } from 'react'
import "./Header.scss"
import { IoDiamondSharp } from "react-icons/io5";
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { Context } from '../Context.js';
import trans from '../Translate.js';
import { NavLink} from 'react-router-dom';
import { BsGlobe } from "react-icons/bs"

function Header() {
	const [show, setShow] = useState(false)
	const [active, setActive] = useState(true)
	const { lang, setLang } = useContext(Context)
	const [showLanguages, setShowLanguages] = useState(false)
	const [activeLanguages, setActiveLanguages] = useState(true)

	function myFunction() {
		setActive(!active)
		setShow(!show)
	}
	let menuRef = useRef()
	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setShow(false)
				setActive(true)
			}
		}
		document.addEventListener("mousedown", handler)
	})

	const scrollToTheTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	function languagesFunction() {
		setShowLanguages(!showLanguages)
		setActiveLanguages(!activeLanguages)
	}
	let languageRef = useRef()
	useEffect(() => {
		let handler = (e) => {
			if (!languageRef.current.contains(e.target)) {
				setShowLanguages(false)
				setActiveLanguages(true)
			}
		}
		document.addEventListener("mousedown", handler)
	})

	return (
		<div className='header' id='header'>
			<ul className="header__logo--container" ref={menuRef}>
				<li className='logo-box'><NavLink to="*" onClick={scrollToTheTop}><span>PIPI` <IoDiamondSharp /></span>SPORTS  <span />PHILOSOPHY <span /></NavLink> </li>
				<li className='hamburger-box' onClick={() => myFunction()} >
					{active ? <RxHamburgerMenu /> : < RxCross1 />}
				</li>
				{show && <ul className="humburger-menu__container" onClick={() => myFunction()}>
					<li className='humburger-menu__container--link'><a href='#coach' onClick={scrollToTheTop}>{trans[lang].coach}</a> </li>
					<li className='li__career humburger-menu__container--link'><a href="#pricing" onClick={scrollToTheTop}>{trans[lang].plans}</a> </li>
					<li className='li__about humburger-menu__container--link'><a href='#straching' onClick={scrollToTheTop}>{trans[lang].straching}</a></li>
					<li className='li__contact humburger-menu__container--link'><a href="#contact" onClick={scrollToTheTop}>{trans[lang].contact}</a> </li>
					<li className='li__burger sprachen humburger-menu__container--link'>
						<button className="button-esp" value="es" onClick={(e) => setLang(e.target.value)}>ES</button>
						<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}>EN</button>
					</li>
				</ul>}
			</ul>

			<div className='header__big-container' >
				<div className="ul__container">
					<ul className='first-ul'>
					<li className='li1'><NavLink to="*" onClick={scrollToTheTop}><span>PIPI` <IoDiamondSharp /></span>SPORTS  <span />PHILOSOPHY <span /></NavLink> </li>
					</ul>

					<ul className="second-ul">
						{/* <li className='li2 lis'><a to="About" onClick={scrollToTheTop}>{trans[lang].about}</a></li> */}
						<li className='li3 lis'><a href='#coach' onClick={scrollToTheTop}>{trans[lang].coach}</a></li>
						<li className='li5 lis'><a href="#pricing" onClick={scrollToTheTop}>{trans[lang].plans}</a> </li>
						<li className='li4 lis'><a href='#straching' onClick={scrollToTheTop}>{trans[lang].straching}</a> </li>
						<li className='li6 lis'><a href="#contact"  onClick={scrollToTheTop}>{trans[lang].contact}</a> </li>
						<li className="dropdown" ref={languageRef} data-dropdown onClick={() => languagesFunction()}>
							<button className='link' data-dropdown-button><BsGlobe /></button>
							{showLanguages && <div className='dropdown-menu'>
								<button className="button-esp" value="es" onClick={(e) => setLang(e.target.value)}>ES</button>
								<button className="button-eng" value="en" onClick={(e) => setLang(e.target.value)}>EN</button>
							</div>}
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Header