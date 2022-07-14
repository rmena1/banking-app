import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <img src="https://www.svgrepo.com/show/71268/bank.svg" className="mr-3 h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BankingAPP</span>
        </a>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">BankingAPP™</a>. Todos los Derechos Reservados. </span>
      </div>
    </footer>
  )
}

export default Footer
