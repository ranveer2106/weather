import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>

            <div className='fadeUp footer' id='footer'>
                <span className="material-symbols-outlined icons fadeUp"><Link to="mailto:ranveerbhatti2106@gmail.com">done</Link></span>
                <span className="material-symbols-outlined icons fadeUp"><Link to="/">done</Link></span>
                <span className="material-symbols-outlined icons fadeUp"><Link to="/">done</Link></span>
                <span className="material-symbols-outlined icons fadeUp"><Link to="/">done</Link></span>
                <span className="material-symbols-outlined icons fadeUp"><Link to="/">done</Link></span>
            </div>

        </>
    )
}
