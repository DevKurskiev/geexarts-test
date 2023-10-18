import React, { useState } from 'react'

import search from '../../assets/sidebar/search.svg'

import s from './Input.module.scss'

const Input = () => {
	const [searchText, setSearchText] = useState('')

	const handleInputChange = event => {
		setSearchText(event.target.value)
	}

	return (
		<label className={s.search_container}>
			<input
				type='search'
				className={s.search}
				placeholder='Search'
				value={searchText}
				onChange={handleInputChange}
			/>
			{searchText === '' && (
				<img src={search} alt='search' className={s.search_icon} />
			)}
		</label>
	)
}

export default Input
