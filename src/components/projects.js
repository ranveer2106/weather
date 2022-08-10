import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects(props) {
    return (
        <div className={props.class}>
            <div className="contain fadeUp">
                <h1 className='projects'>Projects {props.Ppage}</h1>
            </div>
            <div className="pList">
                <div className="pNo fadeUp">
                    <div style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./square.png')} alt="h" />
                    </div>
                    <div style={{ display: "inline-block" }} className="Ptext">
                        <h1 className='fadeUp'>Project No. 1</h1>
                        <p className='fadeUp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta ipsa recusandae, doloribus tempore molestias nostrum saepe quam quae hic voluptatibus sit facere nesciunt laborum? Dolorem cum minus velit magnam nobis officia sunt molestiae eius reprehenderit exercitationem impedit dicta voluptatem, atque id aliquam natus voluptatum beatae vero fuga quos? Quia.</p>
                        <div className='pLink fadeUp'>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                        </div>
                    </div>
                </div>
                <div className={`pNo fadeUp p2No`}>
                    <div style={{ display: "inline-block" }} className="Ptext" id='p2'>
                        <h1 className='fadeUp'>Project No. 2</h1>
                        <p className='fadeUp' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta ipsa recusandae, doloribus tempore molestias nostrum saepe quam quae hic voluptatibus sit facere nesciunt laborum? Dolorem cum minus velit magnam nobis officia sunt molestiae eius reprehenderit exercitationem impedit dicta voluptatem, atque id aliquam natus voluptatum beatae vero fuga quos? Quia.</p>
                        <div className='pLink fadeUp' style={{ justifyContent: "start" }}>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                        </div>
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./square.png')} alt="h" />
                    </div>
                </div>
                <div className="pNo fadeUp">
                    <div style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./square.png')} alt="h" />
                    </div>
                    <div style={{ display: "inline-block" }} className="Ptext">
                        <h1 className='fadeUp'>Project No. 3</h1>
                        <p className='fadeUp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta ipsa recusandae, doloribus tempore molestias nostrum saepe quam quae hic voluptatibus sit facere nesciunt laborum? Dolorem cum minus velit magnam nobis officia sunt molestiae eius reprehenderit exercitationem impedit dicta voluptatem, atque id aliquam natus voluptatum beatae vero fuga quos? Quia.</p>
                        <div className='pLink fadeUp'>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                        </div>
                    </div>
                </div>
                <div className={`pNo fadeUp p2No`}>
                    <div style={{ display: "inline-block" }} className="Ptext" id='p2'>
                        <h1 className='fadeUp'>Project No. 2</h1>
                        <p className='fadeUp' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta ipsa recusandae, doloribus tempore molestias nostrum saepe quam quae hic voluptatibus sit facere nesciunt laborum? Dolorem cum minus velit magnam nobis officia sunt molestiae eius reprehenderit exercitationem impedit dicta voluptatem, atque id aliquam natus voluptatum beatae vero fuga quos? Quia.</p>
                        <div className='pLink fadeUp' style={{ justifyContent: "start" }}>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                        </div>
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./square.png')} alt="h" />
                    </div>
                </div>
                <div className="pNo fadeUp">
                    <div style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./square.png')} alt="h" />
                    </div>
                    <div style={{ display: "inline-block" }} className="Ptext">
                        <h1 className='fadeUp'>Project No. 5</h1>
                        <p className='fadeUp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta ipsa recusandae, doloribus tempore molestias nostrum saepe quam quae hic voluptatibus sit facere nesciunt laborum? Dolorem cum minus velit magnam nobis officia sunt molestiae eius reprehenderit exercitationem impedit dicta voluptatem, atque id aliquam natus voluptatum beatae vero fuga quos? Quia.</p>
                        <div className='pLink fadeUp'>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                        </div>
                    </div>
                </div>
                <div className={`pNo fadeUp p2No`}>
                    <div style={{ display: "inline-block" }} className="Ptext" id='p2'>
                        <h1 className='fadeUp'>Project No. 6</h1>
                        <p className='fadeUp' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta ipsa recusandae, doloribus tempore molestias nostrum saepe quam quae hic voluptatibus sit facere nesciunt laborum? Dolorem cum minus velit magnam nobis officia sunt molestiae eius reprehenderit exercitationem impedit dicta voluptatem, atque id aliquam natus voluptatum beatae vero fuga quos? Quia.</p>
                        <div className='pLink fadeUp' style={{ justifyContent: "start" }}>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                        </div>
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./square.png')} alt="h" />
                    </div>
                </div>
                <div className="pNo fadeUp">
                    <div style={{ display: "inline-block" }}>
                        <img className='imgs fadeUp' src={require('./square.png')} alt="h" />
                    </div>
                    <div style={{ display: "inline-block" }} className="Ptext">
                        <h1 className='fadeUp'>Project No. 7</h1>
                        <p className='fadeUp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta ipsa recusandae, doloribus tempore molestias nostrum saepe quam quae hic voluptatibus sit facere nesciunt laborum? Dolorem cum minus velit magnam nobis officia sunt molestiae eius reprehenderit exercitationem impedit dicta voluptatem, atque id aliquam natus voluptatum beatae vero fuga quos? Quia.</p>
                        <div className='pLink fadeUp'>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                            <span className="material-symbols-outlined icons fadeUp"><a href="/">done</a></span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='sLink'>
                <Link to="/" className="showMore fadeUp" id={props.btn}>SHOW MORE</Link>
            </div>
        </div>
    )
}
