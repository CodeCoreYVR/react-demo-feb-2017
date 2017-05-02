import React from 'react';
import BlueSquare from './BlueSquare';

function OrangeRectangle (props) {
  const style = {
    display: 'flex',
    backgroundColor: 'Orange',
    width: `${50 * 3 + 10 * 5}px`,
    height: `${50 + 10 * 2}px`,
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  return <div style={style} className="orange rectangle">
    <BlueSquare />
    <BlueSquare />
    <BlueSquare />
  </div>
}

export default OrangeRectangle;
