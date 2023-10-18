import React from 'react'
import { Link } from 'react-router-dom'

import { arrow } from '../../assets/index.js'

import styles from './Header.module.scss'

const Header = ({ isHome }) => {
	return (
		<header className={styles.header}>
			<Link to='/' className={styles.left}>
				<img src={arrow} alt='arrow' />
				<h1 className={styles.heading}>Academy</h1>
			</Link>
			{isHome ? (
				<div>
					<div className={styles.filter}>
						<button>All</button>
						<button>Stocks</button>
						<button>ETFs</button>
						<button>Crypto</button>
						<button>NFTs</button>
					</div>
				</div>
			) : (
				<button className={styles.btn} onClick={() => console.log(123)}>
					Skip
				</button>
			)}
		</header>
	)
}

export default Header
