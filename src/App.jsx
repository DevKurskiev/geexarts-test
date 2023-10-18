import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Gallery from './pages/Gallery/Gallery.jsx'
import Slider from './pages/Slider/Slider.jsx'

import Sidebar from './components/Sidebar/Sidebar.jsx'

import {
	new1,
	new2,
	new3,
	new4,
	trending1,
	trending2,
	trending3,
	trending4
} from './assets/index.js'

const App = () => {
	const newPlaylist = [
		{ id: 0, title: 'Fundamentals of investment', img: new1 },
		{ id: 1, title: 'Fundamentals of investment', img: new2 },
		{ id: 2, title: 'Fundamentals of investment', img: new3 },
		{ id: 3, title: 'Fundamentals of investment', img: new4 }
	]

	const trending = [
		{ id: 4, title: 'Fundamentals of investment', img: trending1 },
		{ id: 5, title: 'Fundamentals of investment', img: trending2 },
		{ id: 6, title: 'Fundamentals of investment', img: trending3 },
		{ id: 7, title: 'Fundamentals of investment', img: trending4 }
	]

	const allItems = [...newPlaylist, ...trending]

	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Gallery newPlaylist={newPlaylist} trending={trending} />}
					/>
					<Route path='/slider' element={<Slider allItems={allItems} />} />
					<Route path='/slider/:id' element={<Slider allItems={allItems} />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
