import { useState, useEffect, useCallback } from 'react'

const SearchBar = ({ setCountryCode, setCountry }) => {
  const [countries, setCountries] = useState([])
  const [url] = useState(process.env.REACT_APP_COUNTRIES_API)

  // Get countries from API
  const getCountries = useCallback(async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCountries(data)
  }, [url])

  // Handle country change
  const handleChange = (e) => {
    setCountryCode(e.target.value)

    if (e.target.options[e.target.selectedIndex].text !== 'Seleccione un país') {
      setCountry(e.target.options[e.target.selectedIndex].text)
    }
  }

  useEffect(() => {
    getCountries()
  }, [getCountries])

  return (
    <div className='flex'>
      <div className='mx-auto'>
        <select onChange={handleChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value='' defaultValue>Seleccione un país</option>
          {countries.map(country => (
            <option key={country.alpha2Code} value={country.alpha2Code}>{country.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SearchBar
