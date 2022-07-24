import React from 'react'
import * as Styles from "../styles/title.module.css"

export default function Title (prop) {
    return (
        <h1 className={Styles.title}>{prop.text}</h1>
    )
}