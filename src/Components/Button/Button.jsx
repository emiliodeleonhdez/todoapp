import React from 'react'
import "./Button.scss"

const Button = (props) => {
  return (
    <button className='button-add-task' type={props.type}>{props.buttontext}</button>
  )
}

export default Button