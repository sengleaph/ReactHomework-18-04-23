import React from 'react'
export function Welcome(props) {
  return (
    <h1>Welcome To {props.title}</h1>
  )
}
export const Avatar = ({imageURL, size}) => {
    return(
        <img
        src = {imageURL}
        style = {avatar}
        width = {size}
        height= {size}
        />
    )
}
export default avatar

const avatar ={
    borderRadius: '50%',
    padding:'10'
}