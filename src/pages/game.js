import React, {useState, useEffect, useRef} from "react"
import * as style from "../styles/index.module.css"
import * as Game from "../styles/game.module.css"
import * as ButtonStyle from "../styles/button.module.css"
import Header from "../components/Header.js"
import Trees  from "../components/trees.js"
import weaponImage from "../images/utils/weaponIcon.png"
import backpack from "../images/utils/backpack.png"
import  useWindowDimensions  from "../components/windowDimension.js"
import Menu from "../components/menu.js"
import CraftTable from "../components/craftTable.js"
import Inventory from "../components/inventory.js"

// markup
const GamePage = () => {
  
  const steps = 10;
  const  width  = useWindowDimensions();

  function getGameWidth() {
    return multiple(parseInt(width * 0.60));
  }

  function getGameHeight() {
    if (width < 400) {
      return 200;
    } else if (width < 700) {
      return 250;
    } else if (width < 1086) {
      return 500;
    } else {
      return 600;
    }
  }

  function getGameNumTrees() {
    if (width < 400) {
      return 100;
    } else if (width < 700) {
      return 200;
    } else if (width < 1086) {
      return 300;
    } else {
      return 500;
    }
  }

  const [gameWidth, setGameWidth] = useState(getGameWidth());
  const [gameHeight, setGameHeight] = useState(getGameHeight());

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [directionX, setDirectionX] = useState(1)
  const [directionY, setDirectionY] = useState(0)

  const [headX, setHeadX] = useState(steps/2)
  const [headY, setHeadY] = useState((steps /2 ) / 2)

  const [appleX, setAppleX] = useState(multiple(RandomMinToMax(gameWidth - steps)));
  const [appleY, setAppleY] = useState(multiple(RandomMinToMax(gameHeight - steps)));

  const [points, setPoints] = useState(0);
  const [wood, setWood] = useState(0)

  const [trees, setTrees] = useState([])/**Array de trees */

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const upRef = useRef(null);
  const downRef = useRef(null);
  const chopRef = useRef(null);
  const inventoryRef = useRef(null);

  function getTreesFromChild(valor) { /*Call Back Child from Parent */
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
      } else if (key === 69) {
        chopRef.current.style.background = '#8FFDCB';
        chopRef.current.style.backgroundImage = `url(${weaponImage})`
        chopRef.current.style.backgroundRepeat = 'no-repeat';
        chopRef.current.style.backgroundPosition = 'center';
      }
    }
    document.addEventListener("keydown", keyDownCallBack);

    return () => document.removeEventListener("keydown", keyDownCallBack);

  }, [x, y, steps, headX, headY, rightRef, leftRef, downRef, upRef, chopRef, directionX, directionY, abajo, arriba, derecha, izquierda]);


  useEffect(() => {
    const keyUpCallBack = function(event)  {
      var key = event.keyCode;
      if (key === 39 || key === 68) {
        rightRef.current.style.background = '#1c0c74';
      } else if (key === 37 || key === 65) {
        leftRef.current.style.background = '#1c0c74';
      } else if (key === 40 || key === 83) {
        downRef.current.style.background = '#1c0c74';
      } else if (key === 38 || key === 87) {
        upRef.current.style.background = '#1c0c74';
      } else if (key === 69) {
        chopRef.current.style.background = '#0FA461';
        chopRef.current.style.backgroundImage = `url(${weaponImage})`;
        chopRef.current.style.backgroundRepeat = 'no-repeat';
        chopRef.current.style.backgroundPosition = 'center';
        chopWood();
      }
    }
    
    document.addEventListener("keyup", keyUpCallBack);

    return () => document.removeEventListener("keyup", keyUpCallBack);

  }, [rightRef, leftRef, downRef, upRef, directionX, directionY, trees, chopWood]);
  

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
    } else if (detectTree(appleX, appleY, false)) generateApple();
  }

  function chopWood() { /**Método para picar madera */
    detectTree(directionX, directionY, true);
  }


  function detectTree(x, y, remove) {
    for (var i = 0; i < trees.length; i++) {
      if (x === trees[i].x && y === trees[i].y) {
        if (remove) {
          deleteTree(i);
        }
        return true;
      }
    }
    return false;
  }

  function deleteTree(index) {
    if(trees[index].durability > 0) trees[index].durability --;
      else {
        setTrees(trees.splice(index, 1));
        setWood(wood + 1);
    }
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
      if (!detectTree(x + steps, y, false)) setX(x + steps)
    }
    rotatePlayer(x + steps, y, steps / 2, (steps / 2) / 2);
  }

  // eslint-disable-next-line
  function izquierda () {
    if (x - steps >= 0) {
      if (!detectTree(x - steps, y, false)) setX(x - steps)
    }
    rotatePlayer(x - steps, y, 0, (steps / 2) / 2);
  }

  // eslint-disable-next-line
  function arriba() {
    if (y - steps >= 0) {
      if (!detectTree(x, y - steps, false)) setY(y - steps)
    }
    rotatePlayer(x, y - steps, (steps / 2) / 2, 0);
  }

  // eslint-disable-next-line
  function abajo () {
    if (y + steps <= gameHeight - steps) {
      if (!detectTree(x, y + steps, false)) setY(y + steps)
    }
    rotatePlayer(x, y + steps, (steps / 2) / 2, steps / 2);
  }

  function rotatePlayer(x, y, headX, headY) {
    setDirectionX(x);
    setDirectionY(y);
    setHeadX(headX);
    setHeadY(headY);
  }

  /*function save() {
    var width = document.getElementById('1').value;
    var height = document.getElementById('2').value;
    setGameWidth(parseInt(width))
    setGameHeight(parseInt(height))
    setX(0)
    setY(0)
    console.log(`Width: ${gameWidth}, Height: ${gameHeight}`)
  }*/

  const positionPlayer = {
    width: steps,
    height: steps,
    left: x,
    top: y,
    backgroundColor: "lightblue",
  }

  const playerHead = {
    width: steps / 2,
    height: steps / 2,
    backgroundColor: "blue",
    marginLeft: headX,
    marginTop: headY,
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

  const imageWeapon = {
    width: 70,
    height: 70,
    borderRadius: 100,
    border: '5px solid #137247',
    backgroundColor: '#0FA461',
    cursor: 'pointer',
    backgroundImage: `url(${weaponImage})`,
    imageRendering: 'pixelated',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  const buttonRadius = {
    width: 70,
    height: 70,
    borderRadius: 100,
    border: '5px solid #137247',
    backgroundColor: '#0FA461',
    cursor: 'pointer'
}

  const buttonBackpack = {
    backgroundImage: `url(${backpack})`,
    backgroundSize: 70,
    width: 70,
    height: 70,
    imageRendering: 'pixelated',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block'
  }

  function hidden() {
    inventoryRef.current.style.visibility = 'hidden';
  }

  function visible() {
    inventoryRef.current.style.visibility = 'visible';
  }

  const Desktop = () => {
    return (
      <div  ref={inventoryRef} className={Game.middleContainer}>
        <Inventory/>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
        }}>
          <button style={buttonRadius} onClick={hidden}/>
          <div style={{position: 'relative', display: 'flex', alignItems: 'center', width: 155, height:340, marginRight: 10}}>
            <CraftTable/>
          </div>
        </div>
      </div>
    )
  }

  const Mobile = () => {
    return (
      <div  ref={inventoryRef} className={Game.middleContainer}>
        <div style={{display:'flex', flexDirection: 'column', gap: 10, alignItems:'center'}}>
          <Inventory/>
          <CraftTable/>
        </div>
                
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
        }}>
          <button style={buttonRadius} onClick={hidden}></button>
        </div>
      </div>
    )
  }

  return (
    <main >
      <Header headerText="GAME"/>
      <div className={style.mainContainer}>
        {/*Monedas, madera y boton refresh*/}
        <div className={style.navbarItems}>
          <div className={Game.pointsContainer}>
            <p style={{fontWeight:700, fontSize: 20}}>{points}</p>
            <div className={Game.coint}>$</div>
          </div>
          <div className={Game.pointsContainer}>
            <p style={{fontWeight:700, fontSize: 20}}>{wood}</p>
            <div className={Game.wood}/>
          </div>
        </div>

        {/*Contenedor del Juego */}
        <div>
          <div className={Game.container}  style={dimensions}>
            <div className={Game.cursor} style={positionPlayer}><div style={playerHead}/></div>
            <div className={Game.cursor} style={positionApple}/>
            <Trees getTreesFromChild={getTreesFromChild} multiple={multiple} RandomMinToMax={RandomMinToMax} numTrees={getGameNumTrees()} width={gameWidth} height={gameHeight} steps={steps}/>
          </div>
        </div>
        

        {/*Flechas y botones de accion*/}
        <div className={style.navbar}>
          <div className={style.navbarItems}>
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
            <button ref={chopRef} style={imageWeapon} onClick={chopWood}></button>
            
          </div>
          <div className={style.navbarItems}>
            <button style={buttonBackpack} onClick={visible}/> {/*Backpack Inventory*/}
          </div>

        </div>

        {/*Inventory*/}
        {width > 700 ? <Desktop/> : <Mobile/>}
      </div>
    </main>
  )
}

export default GamePage