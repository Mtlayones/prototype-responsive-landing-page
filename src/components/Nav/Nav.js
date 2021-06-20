import styles from './Nav.module.css';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineMenu } from 'react-icons/ai';

const useClickOutside = (ref, callback) => {
	const handleClick = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};
	const handleResize = (e) => {
		callback();
	};
	useEffect(() => {
		document.addEventListener('click', handleClick);
		window.addEventListener('resize', handleResize);
		return () => {
			document.removeEventListener('click', handleClick);
			window.removeEventListener('resize', handleResize);
		};
	});
};

const Nav = () => {
	const router = useRouter();
	const [toggleMenu, setToggleMenu] = useState(false);
	const componentRef = useRef();
	useClickOutside(componentRef, () => {
		if (toggleMenu) {
			setToggleMenu(false);
		}
	});
	return (
		<nav className={styles.nav_custom}>
			<div className={styles.nav_items_noncontractable}>
				<button
					className={styles.button_menu}
					onClick={() => setToggleMenu(!toggleMenu)}>
					<AiOutlineMenu />
				</button>
				<button className={styles.button_logo}>
					<Image src={logo} alt='logo-image' />
				</button>
			</div>
			<ul
				className={
					toggleMenu
						? styles.nav_items_contractable_true
						: styles.nav_items_contractable
				}
				ref={componentRef}>
				<li className='w-full flex justify-center'>
					<button className={styles.button_tertiary}>HOME</button>
				</li>
				<li className='w-full flex justify-center'>
					<button className={styles.button_tertiary}>ABOUT US</button>
				</li>
				<li className='w-full flex justify-center'>
					<button className={styles.button_tertiary}>CONTACT</button>
				</li>
				<li className='mr-0 md:mr-2 w-full flex justify-center'>
					<button className={styles.button_tertiary}>CART</button>
				</li>
				<li className='w-full flex justify-center'>
					<button
						className={styles.button_primary}
						onClick={() => router.push('/signin')}>
						Sign In
					</button>
				</li>
				<li className='w-full flex justify-center'>
					<button
						className={styles.button_secondary}
						onClick={() => router.push('/signup')}>
						Sign Up
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
