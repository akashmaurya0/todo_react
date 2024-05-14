import React from 'react'

export default function Footer() {
  const New={
    backgroundColor:"black",
    color:"white",
    position:"absolute",
    bottom:'0px',
    textAlign:"center",
    width:"100%"
  }
  return (
    <div className='footer' style={New}>
     <p>copyright &copy;2024 all rights are reserverd</p>
    </div>
  )
}
