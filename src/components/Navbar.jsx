import React from 'react'

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 px-2 z-10 justify-between w-full flex flex-row items-center">
        <div>
            <h1 className="m-2 text-6xl font-bold">
                <a href="/">JV</a>
            </h1>
        </div>
        <div>
            <h1 className="m-2 text-2xl font-bold">
                <a href="/about">ABOUT</a>
            </h1>
        </div>

    </div>
  )
}

export default Navbar