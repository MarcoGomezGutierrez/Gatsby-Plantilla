import React from "react"
import * as style from "../styles/index.module.css"

function refreshPage() {
    window.location.reload(false);
}

const Menu = () => {
    return (
        <div className={style.menu}>
        <ul>
          <li>
            <div>&#9776;</div>
            <ul>
              <li><a onClick={refreshPage} href="">Refresh</a></li>
              <li><a href="../">Return to Index</a></li>
            </ul>
          </li>
        </ul>
      </div>
    )
}

export default Menu