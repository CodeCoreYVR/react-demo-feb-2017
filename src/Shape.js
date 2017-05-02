import React from 'react';

export function Shape (props) {
  const {
    color = 'Blue',
    type = 'Square'
 } = props;
  // 👆 syntax sugar for 👇
  // const color = props.color !== undefined ? props.color : 'Blue';

  const style = {
    height: '50px',
    width: '50px',
    backgroundColor: color,
    borderRadius: type === 'Circle' ? '9999999px' : '0px'
  }
  return <div style={style} className="shape"></div>
}

export default Shape;
