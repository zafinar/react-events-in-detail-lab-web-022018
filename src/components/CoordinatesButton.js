import React from 'react';

class CoordinatesButton extends React.Component{

mouseLocation = (event) => {
this.props.onReceiveCoordinates([event.clientX, event.clientY]);
}

  render(){
    return(
      <button onClick={this.mouseLocation}>Coords</button>
    );
  }
}

export default CoordinatesButton
