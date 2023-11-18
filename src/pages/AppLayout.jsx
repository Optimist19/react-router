// import React from 'react'

import Map from "../Components/Map"
import Sidebar from "../Components/Sidebar"
import User from "../Components/User"

import styles from "./AppLayout.module.css"
// import ProtectedRoute from "./ProtectedRoute"

function AppLayout() {
  return (
	<div className={styles.app}>
		{/* <ProtectedRoute> */}

			<Sidebar />
			<Map />
			<User />
		{/* </ProtectedRoute>  */}
	</div>
  )
}

export default AppLayout

//Decided to move the ProtectedRoute to the app to protect only these pages, it will work fine if left here,