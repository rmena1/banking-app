import { useNavigate } from "react-router-dom"

const Card = ({ bank }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/details`, { state: bank})
  }

  return (
    <button onClick={() => handleClick()} className="mx-auto w-60 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
      <img className="rounded-t-lg mx-auto" src={bank.image} alt="" />
      <div className="px-5 pt-5 mx-auto">
        <h5 className="text-center mb-10 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{bank.fullname}</h5>
      </div>
    </button>
  )
}

export default Card
