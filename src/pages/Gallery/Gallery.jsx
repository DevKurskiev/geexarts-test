import { Link } from 'react-router-dom'

import Header from '../../components/Header/Header.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'

import { arrow, coins } from '../../assets/index.js'
import { education } from '../../assets/index.js'

import styles from './Gallery.module.scss'

const Gallery = ({ newPlaylist, trending }) => {
	return (
		<div className='wrapper'>
			<Sidebar isSlider={false} />
			<div className={styles.gallery}>
				<Header isHome />
				<div className={styles.wrapper}>
					<div>
						<div className={styles.top}>
							<h2 className={styles.heading}>New Playlist</h2>
							<Link to='/slider' className={styles.all}>
								See All
								<img className={styles.arrow} src={arrow} alt='arrow' />
							</Link>
						</div>
						<div className={styles.card_wrapper}>
							{newPlaylist.map(item => (
								<Link to={`/slider/${item.id}`} key={item.id}>
									<div
										className={styles.card}
										style={{
											backgroundImage: `url(${item.img})`,
											backgroundRepeat: 'no-repeat',
											backgroundPosition: 'center',
											backgroundSize: 'cover'
										}}
									>
										<div className={styles.content}>
											<div className={styles.card_top}>
												<div className={styles.left}>
													<img src={coins} alt='coins' />
													Earn 2T
												</div>
												<div className={styles.right}>
													<img src={education} alt='education' />
												</div>
											</div>
											<div className={styles.card_bottom}>{item.title}</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
					<div className={styles.trending}>
						<div className={styles.top}>
							<h2 className={styles.heading}>Trending</h2>
							<Link to='/slider' className={styles.all}>
								See All
								<img className={styles.arrow} src={arrow} alt='arrow' />
							</Link>
						</div>
						<div className={styles.card_wrapper}>
							{trending.map(item => (
								<Link to={`/slider/${item.id}`} key={item.id}>
									<div
										className={styles.card}
										style={{
											backgroundImage: `url(${item.img})`,
											backgroundRepeat: 'no-repeat',
											backgroundPosition: 'center',
											backgroundSize: 'cover'
										}}
									>
										<div className={styles.content}>
											<div className={styles.card_top}>
												<div className={styles.left}>
													<img src={coins} alt='coins' />
													Earn 2T
												</div>
												<div className={styles.right}>
													<img src={education} alt='education' />
												</div>
											</div>
											<div className={styles.card_bottom}>{item.title}</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gallery
