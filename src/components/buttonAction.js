import * as React from "react"
import * as style from "../styles/button.module.css"

// markup
const ButtonAction = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>{props.text}</button>
  )
}

export default ButtonAction