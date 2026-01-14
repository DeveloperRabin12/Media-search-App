import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

        <div className="flex justify-between items-center px-10 py-6 bg-blue-900 font-bold">
                <h2 className="font-medium text-2xl">Media Search</h2>
                <div className="flex gap-4 text-xl justify-between items-center">
                  <Link className="text-base font-medium bg-white text-black active:scale-95  rounded px-4 py-2" to="/">Search</Link>
                <Link className="text-base font-medium bg-white text-black active:scale-95  rounded px-4 py-2" to="/collection">Collection</Link>
                </div>
        </div>
    </div>
  )
}

export default Navbar