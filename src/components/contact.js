import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <>
            <div className='contain fadeUp' id='contactP'>
                <h1>Let's Meet</h1>
                <p>I'm currently looking for oppotunities</p>
                <p>My Inbox is always Open So feel free to Contact Me</p>
                <Link id='call' to="mailto:ranveerbhatti2106@gmail.com" className='showMore fadeUp'>Say Hi</Link>
            </div>
        </>
    )
}
