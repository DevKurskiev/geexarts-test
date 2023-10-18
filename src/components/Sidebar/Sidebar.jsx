import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import {
	ava,
	ava1,
	ava2,
	ava3,
	community,
	help,
	home,
	notifications,
	play
} from '../../assets/index.js'
import Input from '../Input/Input.jsx'

import styles from './Sidebar.module.scss'

const Sidebar = ({ isSlider }) => {
	const lineEl = useRef()
	const handleLineMovements = e => {
		lineEl.current.style.top = e.clientY + 'px'
	}

	return (
		<nav onMouseMove={handleLineMovements} className={styles.nav}>
			<div>
				<div className={styles.top}>
					<button className={styles.top_item}>
						<img src={notifications} alt='Notifications' />
					</button>
					<button className={styles.top_item}>
						<img src={ava} alt='Avatar' />
					</button>
				</div>
				<Input />
				<div className={styles.main}>
					<div className={styles.heading}>Main</div>
					<Link to='#' className={styles.link}>
						<div className={styles.left}>
							<img src={home} alt='Home' />
							Home
						</div>
					</Link>
					<Link to='#' className={styles.link}>
						<div className={styles.left}>
							<img src={play} alt='Play' />
							Watch
						</div>
						<div className={styles.num}>2</div>
					</Link>
					<Link to='#' className={styles.link}>
						<div className={styles.left}>
							<img src={community} alt='Community' />
							Community
						</div>
						<div className={styles.avatars}>
							<img src={ava1} alt='First Avatar' />
							<img
								src={ava2}
								alt='Second Avatar'
								style={{ position: 'absolute', top: 0, left: 12, zIndex: 10 }}
							/>
							<img
								src={ava3}
								alt='Third Avatar'
								style={{ position: 'absolute', top: 0, left: 25, zIndex: 20 }}
							/>
						</div>
					</Link>
				</div>
			</div>
			<div className={styles.bottom}>
				<a href='' className={styles.help}>
					<img src={help} alt='Help' />
					Help
				</a>
				{isSlider ? (
					<div className={styles.footer}>
						<a href=''>Privacy & Policy</a>
						<a href=''>Terms & Conditions</a>
					</div>
				) : (
					''
				)}
			</div>
			<div ref={lineEl} className={styles.line}></div>
		</nav>
	)
}
export default Sidebar
