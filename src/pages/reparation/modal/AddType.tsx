import React from 'react'
import {
  Card
} from '@mui/material';
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
function AddType( {open,children}) {
    if(!open) return null
  return (
    <>
    <Card style={STYLES}  />
    <Card style={Modal_Styles}>
         {children}
    </Card>
    </>
  )
}

export default AddType
