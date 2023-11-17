// import React from 'react'
import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {

	const [searchParams] = useSearchParams();
	// eslint-disable-next-line
	const lat = searchParams.get("lat");
	// eslint-disable-next-line
	const lng = searchParams.get("lng");
	
	// eslint-disable-next-line
  return [lat, lng]
}
