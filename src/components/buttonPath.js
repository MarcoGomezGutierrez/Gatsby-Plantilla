import * as React from "react"
import * as style from "../styles/button.module.css"
import { Link } from 'gatsby'

// markup
const ButtonPath = (props) => {
  return (
    <button className={style.button}>
        <Link to={props.direction} className={style.p}>{props.text}</Link>
    </button>
  )
}

export default ButtonPath