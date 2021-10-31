import { useState } from 'react';

const Coffee = () => {
  const [toast, setToast] = useState(false);
  const addresses = [
    // Bitcoin
    {
      name: 'Bitcoin (SegWit/Nested SegWit)',
      color: 'text-yellow-500',
      address: '3QZbZQxohMegKrs8QWyBcVbH3SnTJydpA3',
    },
    {
      name: 'Bitcoin (Native SegWit)',
      color: 'text-yellow-500',
      address: 'bc1qntw8aulfe2e42xgd0sl9pam5krcz62uke3xewy',
    },
    {
      name: 'Bitcoin (Legacy)',
      color: 'text-yellow-500',
      address: '1GQotnKUEhYDftGK7ShGCSHU7so8ABWcv9',
    },

    // Litecoin
    {
      name: 'LTC (SegWit/Nested SegWit)',
      color: 'text-gray-300',
      address: 'ltc1qunszasyq4zfceklue047a09yucr65mc5cyetmw'
    },
    {
      name: 'LTC (Native SegWit)',
      color: 'text-gray-300',
      address: 'MJVrTpEh9okVjwX5kL6AaVNZhUW96FgAk4'
    },
    {
      name: 'LTC (Legacy)',
      color: 'text-gray-300',
      address: 'LbyApKsTFr3BDMFpS8337tvvfqyH4HPJqf'
    },

    // Others
    {
      name: 'DASH',
      color: 'text-blue-600',
      address: 'Xq6MfSbdddyKoqmHovn3Sv3mmqPZy2HLFV'
    },
    {
      name: 'DOGE',
      color: 'text-yellow-500',
      address: 'D65BoneVqJBSqeQ53QQhoaXSzKg1Kbrmjg'
    }
  ]

  const openToast = () => {
    setToast(true);

    setTimeout(() => {
      setToast(false)
    }, 750)
  }

  const closeToast = () => {
    setToast(false)
  }

  return (
    <div className="flex flex-col justify-center items-center w-full text-white text-3xl">
      <div>
        In case you dont know which BTC/LTC address to use check <a
          className="underline hover:text-red-500 text-blue-300"
          href="https://phemex.com/academy/bitcoin-legacy-vs-segwit-vs-native-segwit"
          target="blank"> 
          this page

        </a> and <a
          className="underline hover:text-red-500 text-blue-300"
          href="https://coinapp.zendesk.com/hc/en-us/articles/360046106453-Bitcoin-Addresses-Legacy-vs-SegWit"
          target="blank"> 
          this page
        </a>
      </div>

      <span className="mb-5">Else you can always use another currency, you're always welcome!</span>

      {addresses.map(({ name, color, address }, i) => (
        <div
          key={name}
          className="flex justify-center items-center gap-3 w-full"
        >
          <span className={`font-semibold select-none ${color}`}>
            {name}:
          </span>
          <button
            className="hover:text-red-500"
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
          absolute bottom-10
          w-[280px]
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
