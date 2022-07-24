import React, {useState} from "react"
import * as style from "../styles/index.module.css"
import * as Game from "../styles/game.module.css"
import * as ButtonStyle from "../styles/button.module.css"
import ButtonPath from "../components/buttonPath.js"
import ButtonAction from "../components/buttonAction.js"
import Header from "../components/Header.js"


// markup
const GamePage = () => {

  const [x, setX] = useState(1);
  const [y, setY] = useState(1);

  function derecha() {
    if (x + 5 <= 91) setX(x + 5)
  }

  function izquierda () {
    if (x - 5 >= 1) setX(x - 5)
  }

  function arriba() {
    setY(y - 5)
  }

  function abajo () {
    setY(y + 5)
  }

  const position = {
    left: x,
    top: y,
  }

  return (
    <main className={style.indexContainer}>
      <Header headerText="GAME"/>
      <div className={Game.container}><div className={Game.cursor} style={position}>+</div></div>
      <div className={style.navbar}>
        <ButtonPath text="Return to Index Page" direction="../"/> 
        <div className={Game.rowsContainer}>
            <button onClick={arriba} className={`${Game.rowUp} ${ButtonStyle.button} ${ButtonStyle.button1}`}>&#8593;</button>
            <button onClick={abajo} className={`${Game.rowDown} ${ButtonStyle.button} ${ButtonStyle.button1}`}>&#8595;</button>
            <button onClick={derecha} className={`${Game.rowRight} ${ButtonStyle.button} ${ButtonStyle.button1}`}>&#8594;</button>
            <button onClick={izquierda} className={`${Game.rowLeft} ${ButtonStyle.button} ${ButtonStyle.button1}`}>&#8592;</button>
        </div>
        <div>X: {x}</div>
        <div>Y: {y}</div>
        
      </div>
    </main>
    
  )
}

export default GamePage