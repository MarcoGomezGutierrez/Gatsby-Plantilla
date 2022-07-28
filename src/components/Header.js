import * as React from "react"
import * as style from "../styles/title.module.css"

const Header = ({ headerText } ) => (
    <h1 className={style.title}>{headerText}</h1>
) 

export default Header