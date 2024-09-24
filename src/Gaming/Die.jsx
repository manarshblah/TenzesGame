import React from 'react'

function Die(props) {
    const styles={
      backgroundColor: props.isHeld ? "#59E391":"white"
    }
  return (
    <div className='Die' style={styles} onClick={props.handelClick}>
        <h2>{props.value}</h2>
    </div>
  )
}

export default Die