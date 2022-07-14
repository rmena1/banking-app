import React from 'react'
import { useLocation } from 'react-router-dom'

import DetailsCard from '../components/DetailsPage/DetailsCard'

const Details = () => {
  const { state } = useLocation()

  return (
    <>
      <DetailsCard bank={state}/>
    </>
  )
}

export default Details
