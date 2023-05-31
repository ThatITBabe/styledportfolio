import React from 'react'
import './skill.css'

const Skills = () => {
    const style = {
        width: "120px"
    }
    return (
        <div id='skills'>
              <div className="container">
                <h1 className="sub-title">My skills</h1>
                <div className="skills-list">
                    <div>
                        <img src="html.png" style={style}/>
                    </div>
                    <div>
                        <img src="css.png" style={style}/>
                    </div>
                    <div>
                        <img src="sass.png" style={style}/>
                    </div>
                    <div>
                        <img src="bootstrap.png" style={style}/>
                    </div>
                    <div>
                        <img src="js2.png" style={style}/>
                    </div>
                    <div>
                        <img src="react.png" style={style}/>
                    </div>
                    <div>
                        <img src="node.png" style={style}/>
                    </div>
                    <div>
                        <img src="express.png" style={style}/>
                    </div>
                    <div>
                        <img src="mongodb.png" style={style}/>
                    </div>
                </div>
              </div>
        </div>
      )
}

export default Skills