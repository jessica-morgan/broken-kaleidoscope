import React from 'react'

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
        console.log(this.state)
        this.setState({
           // ...this.state.style this doesn't work with webpack
           style: Object.assign({}, this.state.style, {backgroundColor: randomHexColor()})
        })
      }
    
    render () {
        return (
            
            <div onClick={this.clickHandler} style={this.state.style}></div>
        )
    }
}
export default Pixel