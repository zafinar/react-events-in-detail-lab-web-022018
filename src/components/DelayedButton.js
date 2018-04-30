import React from 'react'

class DelayedButton extends React.Component{
  buttonClick = (event) => {
  let delay = this.props.delay
  event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)},delay)
  }
  render(){


    return(
<div>
<button onClick={this.buttonClick}>Click Me.</button>
</div>
    )
  }
}
export default DelayedButton
