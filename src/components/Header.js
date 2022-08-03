import React, {useState} from "react"
import * as style from "../styles/layaout/layaout.module.css"


const Header = ({ headerText} ) => {    

    /*const navbar = useState(navbar);*/
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className={style.header}>
            
            <div className={style.navbar}>
                <h1 className={style.title} onClick={refreshPage}>{headerText}</h1>
                <div className={style.listItems}>
                    <ul>
                        <a href="#">Games &#x2335;</a>
                        <div className={style.listContainer}>
                            <li>
                                <a href="./game">Game 1</a>
                            </li>
                            <li>
                                <a  href="../componets/inventory">Inventory</a>
                            </li>
                        </div>
                        
                    </ul>
                    <ul>
                        <a href="#"> asdasd</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header