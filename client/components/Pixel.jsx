import React from 'react'
import { green, greenBright, yellowBright, black } from 'ansi-colors';

const randomHexColor = () =>
        `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    constructor () {
        super ()
    }

    state = {
        style: {
            height: '60px', 
            width: '50px',
            backgroundColor: randomHexColor()
        }
    }
    clickHandler = evt => {
        this.setState({
           // ...this.state.style spread operator doesn't work with webpack
           style: Object.assign({}, this.state.style, {backgroundColor: randomHexColor()})
        })
      }
     mouseHover = evt => {
         this.setState({
            style: {
                height: '60px', 
            width: '50px',
            backgroundColor: 'green'
            }
         })
     }
     onDrag = evt => {
        this.setState({
           style: {
               height: '60px', 
           width: '50px',
           backgroundColor: 'pink'
           }
        })
    }
    render () {
        return (
            
            <div onDrag={this.onDrag} onClick={this.clickHandler} onMouseLeave={this.mouseHover} style={this.state.style}></div>
        )
    }
}
export default Pixel