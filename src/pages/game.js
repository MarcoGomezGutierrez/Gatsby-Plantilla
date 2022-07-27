import React, {useState, useEffect, useRef} from "react"
import * as style from "../styles/index.module.css"
import * as Game from "../styles/game.module.css"
import * as ButtonStyle from "../styles/button.module.css"
import ButtonPath from "../components/buttonPath.js"
import Header from "../components/Header.js"
import Trees  from "./trees.js"


// markup
const GamePage = () => {
  
  const [gameWidth, setGameWidth] = useState(parseInt(500));
  const [gameHeight, setGameHeight] = useState(parseInt(500));

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [appleX, setAppleX] = useState(20);
  const [appleY, setAppleY] = useState(30);

  const [points, setPoints] = useState(0);

  const steps = 10;
  
  const [trees, setTrees] = useState([])/**Array de trees */

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const upRef = useRef(null);
  const downRef = useRef(null);

  function getTreesFromChild(valor) {
    setTrees(valor)
  }

  function multiple(valor) {
    if ((valor % steps) === 0) return valor;
    else return multiple(valor + 1);
  }

  function generateApple() {
    setAppleX(multiple(RandomMinToMax(gameWidth - steps)));
    setAppleY(multiple(RandomMinToMax(gameHeight - steps)));
  }

  function RandomMinToMax (max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const keyDownCallBack = function(event)  {
      var key = event.keyCode;
      if (key === 39 || key === 68) {
        rightRef.current.style.background = '#7863EA';
        derecha();
      } else if (key === 37 || key === 65) {
        leftRef.current.style.background = '#7863EA';
        izquierda();
      } else if (key === 40 || key === 83) {
        downRef.current.style.background = '#7863EA';
        abajo();
      } else if (key === 38 || key === 87) {
        upRef.current.style.background = '#7863EA';
        arriba();
      }
    }
    document.addEventListener("keydown", keyDownCallBack);

    return () => document.removeEventListener("keydown", keyDownCallBack);

  }, [derecha, izquierda, abajo, arriba, rightRef, leftRef, downRef, upRef]);


  useEffect(() => {
    const keyDownCallBack = function(event)  {
      var key = event.keyCode;
      if (key === 39 || key === 68) {
        rightRef.current.style.background = '#1c0c74';
      } else if (key === 37 || key === 65) {
        leftRef.current.style.background = '#1c0c74';
      } else if (key === 40 || key === 83) {
        downRef.current.style.background = '#1c0c74';
      } else if (key === 38 || key === 87) {
        upRef.current.style.background = '#1c0c74';
      }
    }
    document.addEventListener("keyup", keyDownCallBack);

    return () => document.removeEventListener("keyup", keyDownCallBack);

  }, [rightRef, leftRef, downRef, upRef]);
  
  useEffect(() => {
    detectCollision();
    // eslint-disable-next-line
  }, [x, appleX, y, appleY]);

  useEffect(() => {
    reloat(); 
    // eslint-disable-next-line
  }, [appleX, appleY, gameWidth, gameHeight, trees]);

  function reloat() {
    if (appleX > gameWidth || appleY > gameHeight) {
      generateApple();
    } else if (detectTree(appleX, appleY)) generateApple();
  }

  function detectTree(x, y) {
    for (var i = 0; i < trees.length; i++) {
      if (x === trees[i].x && y === trees[i].y) {
        return true;
      }
    }
    return false;
  }

  function detectCollision() {
    if (x === appleX && y === appleY) {
      setPoints(points + 1);
      generateApple();
    }
  }

  // eslint-disable-next-line
  function derecha() {
    if (x + steps <= gameWidth - steps) {
      if (!detectTree(x + steps, y)) setX(x + steps)
    }
  }

  // eslint-disable-next-line
  function izquierda () {
    if (x - steps >= 0) {
      if (!detectTree(x - steps, y)) setX(x - steps)
    }
  }

  // eslint-disable-next-line
  function arriba() {
    if (y - steps >= 0) {
      if (!detectTree(x, y - steps)) setY(y - steps)
    }
  }

  // eslint-disable-next-line
  function abajo () {
    if (y + steps <= gameHeight - steps) {
      if (!detectTree(x, y + steps)) setY(y + steps)
    }
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

  const positionCursor = {
    width: steps,
    height: steps,
    left: x,
    top: y,
    backgroundColor: "lightblue",
  }

  const positionApple = {
    width: steps,
    height: steps,
    left: appleX,
    top: appleY,
    backgroundColor: "red",
  }

  const dimensions = {
    width: gameWidth,
    height: gameHeight,
    minWidth: gameWidth,
    minHeight: gameHeight,
  }

  return (
    <main >
      <Header headerText="GAME"/>
      <div className={style.navbar}>
        <p>Width: <input id="1" type="number" name="width" required minLength="4" maxLength="8" size="10"/></p>
        <p>Height: <input id="2" type="number" name="height" required minLength="4" maxLength="8" size="10"/></p>
        <button className={`${ButtonStyle.button}`} onClick={save}>Save</button>
      </div>
      
      <div className={style.navbar}>
      <p style={{fontWeight:700}}>Points: {points}</p>
      <div className={Game.coint}>$</div>
      </div>
      
      <div className={Game.container}  style={dimensions}>
        <div className={Game.cursor} style={positionCursor}></div>
        <div className={Game.cursor} style={positionApple}></div>
        <Trees getTreesFromChild={getTreesFromChild} multiple={multiple} RandomMinToMax={RandomMinToMax} width={gameWidth} height={gameHeight} steps={steps}/>
      </div>
      <div className={style.navbar}>
         
        <div className={Game.rowsContainer}>

            <div className={Game.firstContainer}>
              <button ref={upRef} onClick={arriba} className={`${ButtonStyle.button} ${Game.arrow}`}>&#8593;</button>
            </div>
            
            <div className={Game.secondContainer}>
              <button ref={leftRef} onClick={izquierda} className={`${ButtonStyle.button} ${Game.arrow}`}>&#8592;</button>
              <button ref={downRef} onClick={abajo} className={`${ButtonStyle.button} ${Game.arrow}`}>&#8595;</button>
              <button ref={rightRef} onClick={derecha} className={`${ButtonStyle.button} ${Game.arrow}`}>&#8594;</button>
            </div>
        </div>
        {/* <div>X: {x}, Y: {y}, AppleX: {appleX}, AppleY: {appleY}</div> */}
        
      </div>
      <div className={Game.buttonReturn} style={{marginTop: "auto", alignSelf:"flex-end"}}><ButtonPath text="Return to Index Page" direction="../"/></div>
    </main>
    
  )
}

export default GamePage