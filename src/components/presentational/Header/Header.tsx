import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import SVGManager from "../../../SVGManager";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

const Header = () => {
	const [nav, setNav] = useState(false);

	function handleOpenMenu() {
		setNav(true);
	}

	function handleCloseMenu() {
		setNav(false);
	}

	return (
		<header className={styles.headerWrapper}>
			<CSSTransition in={nav} timeout={500} classNames="nav" unmountOnExit>
				<section className={styles.absoluteNav}>
					<div className={styles.absoluteNavCloser} onClick={handleCloseMenu}>
						{SVGManager.getSVG('burgerCloser')}
					</div>
					<div>
						<p className={styles.navElem}>О лаборатории</p>
						<p className={styles.navElem}>Учебная деятельность</p>
						<p className={styles.navElem}>Научная деятельность</p>
						<p className={styles.navElem}>Новости</p>
						<p className={styles.navElem}>Контакты</p>
					</div>
				</section>
			</CSSTransition>
			<aside className={styles.headerAside}>
				<Logo />
				<div className={styles.langWrapper}>
					<p className={styles.lang}>En</p>
					{SVGManager.getSVG('flag')}
				</div>
			</aside>
			<nav className={styles.navWrapper}>
				<div className={styles.navName}>
                    {SVGManager.getSVG('logoAlternate')}
					<h6 className={styles.navNameText}>Лаборатория робототехники</h6>
				</div>
				<div className={styles.navContent}>
                    <p className={styles.navElem}>О лаборатории</p>
                    <p className={styles.navElem}>Учебная деятельность</p>
                    <p className={styles.navElem}>Научная деятельность</p>
                    <p className={styles.navElem}>Новости</p>
                    <p className={styles.navElem}>Контакты</p>
                </div>
				<div className={styles.navMobileContent}>
					<div onClick={handleOpenMenu}>{SVGManager.getSVG('burger')}</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
