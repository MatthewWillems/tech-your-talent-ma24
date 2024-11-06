import styles from './index.module.scss';
import { FC, useEffect, useState } from 'react';

const Navigation: FC<{
	Logo: string
}> = ( { Logo } ) => {
	// This feature stops scrolling when using the hamburger menu
	const [scrolled, setScrolled] = useState( false );
	const [isOpen, setIsOpen] = useState( false );

	const toggleMenu = () => {
		setIsOpen( !isOpen );
	};

	useEffect( () => {
		const handleScroll = () => {
			if ( window.scrollY > 0 ) {
				setScrolled( true );
			} else {
				setScrolled( false );
			}
		};

		window.addEventListener( 'scroll', handleScroll );

		return () => {
			window.removeEventListener( 'scroll', handleScroll );
		};
	}, [] );

	return (
		<nav className={`${styles.nav} ${scrolled && styles.scrolled}`}>
			<div className={styles.navContainer}>
				<div className={styles.navDivLeft}>
					<a href="/">
						<img src={Logo} alt="TechCampusLogo" className={styles.navLogo} />
					</a>
				</div>
				<div className={styles.navDivRight}>
					<a href="/login" style={{ textDecoration: 'none', color: 'white' }}>
						Inloggen
					</a>
					<a href="/signup">
						<button type="button" className={styles.navSignup}>
							Schrijf je in!
						</button>
					</a>
				</div>
			</div>
			<div>
				<a href="/">
					<img
						src={Logo}
						alt="TechCampusLogo"
						className={styles.navHamburgerLogo}
					/>
				</a>
				<div className={styles.hamburgerMenu}>
					<div
						className={`${styles.menuBtn} ${isOpen ? styles.open : ''}`}
						onClick={toggleMenu}
					>
						{isOpen ? (
							<div className={styles.menuBtnCross}></div>
						) : (
							<div className={styles.menuBtnBurger}></div>
						)}
					</div>
					<ul className={`${styles.menuItems} ${isOpen ? styles.open : ''}`}>
						<div>
						</div>
						<div className={styles.menuItemsLi}>
							<a href="https://techcheck.nl/" className={styles.hamburgerA}>
								<li className={styles.hamburgerLi}>Doe de test</li>
							</a>
							<a
								href="https://jet-net.nl/voortgezet-onderwijs/techniek-klas-halen/7-werelden-van-techniek/"
								className={styles.hamburgerA}
							>
								<li className={styles.hamburgerLi}>Ontdek de 7 werelden</li>
							</a>
						</div>
						<div className={styles.menuItemsDiv}>
							<a href="/login" style={{ textDecoration: 'none', color: 'white' }}>
								Inloggen
							</a>
							<a href="/signup">
								<button type="button" className={styles.navSignup}>
									Schrijf je in!
								</button>
							</a>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
