import * as React from "react"
import * as style from "../styles/header.module.css"
import  useWindowDimensions  from "../components/windowDimension.js"
import Menu from "./menu"



const Header = () => {

    const  width  = useWindowDimensions();

    const Title = () => (
        <a className={style.title} href="./">  Marckrack Games </a>
    )

    const ListItems = () => (
        <div className={style.containerItems}>
            <a className={style.item} style={{order: 1}} href="/game">Game 1</a>
            <a className={style.item} style={{order: 1}} href="/game">Game 2</a>
        </div>
    )

    const Items = () => {
        if (width > 1200) {
            return (
                <div className={style.headerContainer}>
                    <div className={style.navbar}>
                        <Title/>
                        <ListItems/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={style.headerContainer}>
                    <Title/>
                    <Menu/>
                </div>
                
            );
        }
    }

    return (
        <Items/>
    )
}

export default Header