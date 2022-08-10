import React from 'react';
import "./component.css"
import { Link } from 'react-router-dom';

function Sidebars() {
    return (
        <div>
            <div id="left" className='fadeUp'>
                <span className="material-symbols-outlined icons fadeUp"><Link to="/">done</Link></span>
                <span className="material-symbols-outlined icons fadeUp"><Link to="/">done</Link></span>
                <span className="material-symbols-outlined icons fadeUp"><Link to="/">done</Link></span>
                <span className="material-symbols-outlined icons fadeUp"><Link to="/">done</Link></span>
            </div>
            <div id="email"  >
                <div className='fadeUp'>
                    <a className='fadeUp' target="_blank" rel="noreferrer" href="mailto:ranveerbhatti2106@gmail.com">ranveerbhatti2106@gmail.com</a>
                </div>

            </div>
        </div>
    )
}

export default Sidebars