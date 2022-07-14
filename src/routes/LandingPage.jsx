import { useState } from 'react'
import SearchBar from '../components/LandingPage/SearchBar'
import CardDisplay from '../components/LandingPage/CardDisplay'

const LandingPage = () => {
  const [countryCode, setCountryCode] = useState('CL')
  const [country, setCountry] = useState('Chile')

  return (
    <div className='my-20 mx-auto w-5/6'>
      <SearchBar setCountryCode={setCountryCode} setCountry={setCountry}/>
      <div> <h1 className='text-xl mt-10 ml-10 font-bold text-sky-800'>Mostrando bancos de {country}</h1> </div>
      <CardDisplay countryCode={countryCode}/>
    </div>
  )
}

export default LandingPage
