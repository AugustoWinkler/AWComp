import React from "react";
import './Header.css';

const Header = () => {
    return(
        <div className="Header">
            <div>
                <h1>Augusto Winkler</h1>
                <h2>Components Library</h2>
                <h3>15 Text Effects, 7 Buttons Effects and 10 Border Effects</h3>
                <a href="https://github.com/AugustoWinkler/AWComp/tree/main/AWComp/src/Components" target="_blank"><button>GitHub Repository</button></a>
                <div id="desc" >
                    <p>
                        This project aims to create a foundation for various animations and effects.
                        You are free to use and modify the components in your own project.
                        If you're interested in expanding the components, collaborating on a project, or exchanging experiences, feel free to get in touch.
                    </p>
                </div>
                <div className="social">
                    <a href='https://github.com/AugustoWinkler' target='_blank'>
                        <div className='Icon'>
                            <img src='./GitHub.png' alt='GitHub Link'></img>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/augusto-winkler-a268b81bb/' target='_blank'>
                        <div className='Icon'>
                            <img src='./Linkedin.png' alt='Linkedin Link'></img>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Header