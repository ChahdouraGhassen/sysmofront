import React from 'react'
const Modal_Styles={
  position:'fixed',
  top:'50%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  backgroundColor:'#fff',
  padding:'50px',
  zIndex:1000
}as React.CSSProperties;
const STYLES={
position:'fixed',
top:0,
left:0,
right:0,
bottom:0,
backgroundColor:'rgba(0,0,0,.7)',
zIndex:1000
}as React.CSSProperties;
function AddClient( {open,children}) {
    if(!open) return null
  return (
    <>
    <div style={STYLES}  />
    <div style={Modal_Styles}>
         {children}
    </div>
    </>
  )
}

export default AddClient
