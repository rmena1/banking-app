import { useEffect } from 'react'

const DetailsCard = ({ bank }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="mx-auto my-20 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className='w-80'>
        <img className="w-full object-cover h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={bank.image} alt=""/>
      </div>
      <div className="w-full flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bank.fullname}</h5>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="https://www.svgrepo.com/show/45962/repairing-service.svg" alt="" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Servicio
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {bank.service}
                </p>
              </div>
            </div>
          </li>

          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="https://www.svgrepo.com/show/5319/user.svg" alt="" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Usuario
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {bank.user}
                </p>
              </div>
            </div>
          </li>

          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="https://www.svgrepo.com/show/391911/lock-alt.svg" alt="" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Contraseña
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {bank.pass}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DetailsCard
