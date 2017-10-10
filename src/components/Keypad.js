import React from 'react'

class Keypad extends React.Component{
  keyEvent = () => {
    console.log('Entering password...')
  }
  render(){
    return(
    <input type="password" onKeyUp={this.keyEvent}> </input>
    )
  }
}// Code Keypad Component Here

export default Keypad
