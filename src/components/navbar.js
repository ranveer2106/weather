import React from 'react'

import logo from "./logo.png"

export default function Navbar() {

    return (
        <>
            <div className='flex navbar justify-around py-2'>
                <div className="logo">
                    <img src={logo} alt="hi" />
                </div>
                <div className="options">
                    <ul className='flex'>
                        <li className='px-1 mx-2'><a href="/">home</a></li>
                    </ul>
                </div>


            </div>
        </>
    )
}
