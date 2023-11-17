// import React from 'react'
import styles from './CityList.module.css'
import CityItem from './CityItem'
import Spinner from './Spinner'
import Message from './Message'
import { useCities } from '../contexts/CitiesContext'


import PropTypes from "prop-types"


CityList.propTypes = {
	cities: PropTypes.array,
	isLoading: PropTypes.bool
}

function CityList() {
	
	const {cities, isLoading} = useCities()
	
	console.log(isLoading, "isLoading")

	console.log(cities, isLoading, "shit")
	if(isLoading) return <Spinner />

	if(!cities.length) 
	return (
		<Message message="Add your first city by checking on a city on the map"/>
	)


  return (
	<ul className={styles.CityList}>
		{
			cities.map(city =>{
				return <CityItem city={city} key={city.id} />
			})
		}
		
	</ul>
  )
}

export default CityList