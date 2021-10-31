import { useState } from 'react';

const Coffee = () => {
  const [toast, setToast] = useState(false);
  const addresses = [
    {
      name: 'BTC',
      color: 'text-yellow-500',
      address: 'hhr98aer8avrn98vr98eanryu',
    },
    {
      name: 'LTC',
      color: 'text-gray-300',
      address: 'a80sb7vr80s7bvras8rb7ar9as7sa7r9sbr6va'
    },
    {
      name: 'DOGE',
      color: 'text-yellow-200',
      address: '0sabsa8fysasafbasfsaf6fbas7f6asf'
    }
  ]

  const openToast = () => {
    setToast(true);

    setTimeout(() => {
      setToast(false)
    }, 2000)
  }

  const closeToast = () => {
    setToast(false)
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {addresses.map(({ name, color, address }, i) => (
        <div
          key={name}
          className="flex justify-center items-center gap-3 w-full"
        >
          <span className={`text-3xl font-semibold ${color}`}>
            {name}:
          </span>
          <button
            className="text-3xl text-white hover:text-red-500"
            onClick={() => {
              navigator.clipboard.writeText(address)
              openToast()
            }}
          >
            {address}
          </button>
        </div>
      ))}

      <div
        className={`
          flex justify-center items-center
          absolute bottom-10 left-[calc(50%-100px)]
          w-[200px]
          py-3
          text-black bg-gray-300
          rounded cursor-pointer select-none
          transition-all duration-500

          hover:bg-gray-400

          ${toast ? 'opacity-100' : 'opacity-0'}
        `}
        onClick={closeToast}
      >
        Copied to clipboard!
      </div>
    </div>
  )
}
  
export default Coffee
