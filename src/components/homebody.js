import React from 'react';
import About from './about';
import Contact from './contact';
import Projects from './projects';
// import { useState } from "react";


function Body(props) {
    // const [text, settext] = useState("front")

    // setTimeout(() => {
    //     setInterval(() => {
    //         settext("front")
    //     }, 6000);
    // }, 4000);
    // setTimeout(() => {
    //     setInterval(() => {
    //         settext("back")
    //     }, 6000);
    // }, 1000);
    return (
        <>
            <div className="container">
                {/* <img className='img fadeUp' src={require('./round.png')} alt="h" /> */}
                <div id='text'>
                    <div className="l1 fadeUp">Hi my name is Ranvir</div>
                    <div className="l2 fadeUp">I build Stuff for the internet</div>
                    <div className="l3 fadeUp">I'm a student currently. I like to work on HTML,CSS,Javascript,Nodejs and React I'm a student currently. I like to work on HTML,CSS,Javascript,Nodejs and React I'm a student currently. I like to work on HTML,CSS,Javascript,Nodejs and React</div>
                </div>
                {/* <a href='/' className='btn fadeUp' >Hello</a> */}
            </div>
            <About />
            <Projects class={props.class} btn={props.btn} appear={props.btn} />
            <Contact />
        </>
    )
}

export default Body