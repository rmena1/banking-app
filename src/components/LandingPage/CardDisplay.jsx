import { useState, useEffect, useCallback } from 'react'
import Card from './Card'

const CardDisplay = ({ countryCode }) => {
  const [banks, setBanks] = useState([])
  const [url, setUrl] = useState('')
  const [haveBanks, setHaveBanks] = useState(false)
  const [loading, setLoading] = useState(true)

  // Get banks from API
  const getBanks = useCallback(async () => {
    if (url) {
      setLoading(true)
      try {
        const response = await fetch(url, {
          headers: {
            'Origin': 'http://localhost:3000'
            }
          }
        )
        const data = await response.json()
        setBanks(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
  }, [url])

  useEffect(() => {
    if (countryCode) {
      setUrl(`${process.env.REACT_APP_BANKS_API}?country_code=${countryCode}`)
    } else {
      console.log('No country code')
    }
  }, [countryCode])

  useEffect(() => {
    getBanks()
  }, [getBanks])

  useEffect(() => {
    if (banks.length > 0) {
      setHaveBanks(true)
    } else {
      setHaveBanks(false)
    }
  }
  , [banks])

  if (loading) {
    return (
      <div className='flex flex-wrap gap-y-10 mt-20'>
        <div className='mx-auto'>
          <h5 className='text-center mb-10 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>Cargando ...</h5>
        </div>
      </div>
    )
  }else if (haveBanks) {
    return (
      <div className='flex flex-wrap gap-y-10 mt-20 gap-x-5 justify-center'>
        {banks.map(bank => (
          <Card key={bank.service} bank={bank} />
        ))}
      </div>
    )
  } else {
    return (
      <div className='flex flex-wrap gap-y-10 mt-20'>
        <div className='mx-auto'>
          <h5 className='text-center mb-10 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>No se encontraron bancos</h5>
        </div>
      </div>
    )
  }
}

export default CardDisplay
