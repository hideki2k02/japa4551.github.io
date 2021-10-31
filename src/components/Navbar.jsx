import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const links = {
    '/': 'Home',
    '/donate': 'Buy Me a Coffee'
  }

  return (
    <div className="flex items-center justify-center gap-7 w-full h-14 bg-gray-900 text-gray-50 font-semibold mb-5">
      {Object.entries(links).map(([ path, text ], i) => (
        <Link
          to={path}
          key={i}
          className={`
            text-3xl
            ${location.pathname === path ? 'text-red-500' : 'hover:text-red-500'}
          `}
        >
          {text}
        </Link>
      ))}
    </div>
  )
}

export default Navbar
