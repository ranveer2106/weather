import React from 'react'

export default function About() {
    return (
        <>
            <div className="container fadeUp" id='about'>
                <h1 className='about'>About me</h1>
                <img className='img fadeUp' src={require('./round.png')} alt="h" />
                <p className='fadeUp'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatem rem nostrum temporibus in molestias iure officia at sint porro accusamus enim magnam soluta, ea nihil veniam, aperiam amet totam, sit perspiciatis. Quidem corporis quibusdam omnis consectetur deserunt natus possimus aliquid consequatur, earum quia ex at unde! Distinctio quia laudantium accusantium suscipit beatae ad a placeat error tempore delectus, consequatur, tenetur officiis optio reprehenderit non necessitatibus enim doloremque ut commodi.
                </p>
                <h1 className='tech'>Technologies I use</h1>
                <div className="skills">
                    <div className='skill'>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>NodeJs</li>
                        </ul>
                    </div>
                    <div className='skill'>
                        <ul>
                            <li>React</li>
                            <li>MongoDB</li>
                            <li>Python</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
