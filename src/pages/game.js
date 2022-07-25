import React, {useState} from "react"
import * as style from "../styles/index.module.css"
import * as Game from "../styles/game.module.css"
import * as ButtonStyle from "../styles/button.module.css"
import ButtonPath from "../components/buttonPath.js"
import Header from "../components/Header.js"


// markup
const GamePage = () => {

  const [gameWidth, setGameWidth] = useState(parseInt(100));
  const [gameHeight, setGameHeight] = useState(parseInt(100));

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight") if (x + steps <= gameWidth - 10) setX(x + steps)
    if (event.key === "ArrowLeft") if (x - steps >= 0) setX(x - steps)
    if (event.key === "ArrowDown") if (y + steps <= gameHeight - 20) setY(y + steps)
    if (event.key === "ArrowUp") if (y - steps >= 0) setY(y - steps)
  })

  const steps = 5;

  function derecha() {
    if (x + steps <= gameWidth - 10) setX(x + steps)
  }

  function izquierda () {
    if (x - steps >= 0) setX(x - steps)
  }

  function arriba() {
    if (y - steps >= 0) setY(y - steps)
  }

  function abajo () {
    if (y + steps <= gameHeight - 20) setY(y + steps)
  }

  function save() {
    var width = document.getElementById('1').value;
    var height = document.getElementById('2').value;
    setGameWidth(parseInt(width))
    setGameHeight(parseInt(height))
    setX(0)
    setY(0)
    console.log(`Width: ${gameWidth}, Height: ${gameHeight}`)
  }

  const position = {
    left: x,
    top: y,
  }

  const dimensions = {
    width: gameWidth,
    height: gameHeight,
  }

  return (
    <main className={style.indexContainer}>
      <Header headerText="GAME"/>
      <div className={Game.container}  style={dimensions}><div className={Game.cursor} style={position}>+</div></div>
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
        <button className={`${ButtonStyle.button} ${ButtonStyle.button1}`} onClick={save}>Save</button>
        <p>Width: <input id="1" type="number" name="width" required minLength="4" maxLength="8" size="10"/></p>
        <p>Height: <input id="2" type="number" name="height" required minLength="4" maxLength="8" size="10"/></p>
      </div>
    </main>
    
  )
}

export default GamePage