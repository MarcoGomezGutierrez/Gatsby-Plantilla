import React, {useState} from "react"
import * as style from "../styles/index.module.css"
import ButtonPath from "../components/buttonPath.js"
import ButtonAction from "../components/buttonAction.js"
import Header from "../components/Header.js"


// markup
const IndexPage = () => {

  const [count, setCount] = useState(1);

  function sumar() {
    setCount(count + 1)
  }

  function restar () {
    if (count - 1 >= 0) setCount(count - 1)
  }

  return (
    <main>
      <Header headerText="INDEX"/>
      <div className={style.navbar}>
        <ButtonPath text="Go to other page" direction="/other"/> 
        <ButtonPath text="Go to game page" direction="/game"/> 
        <ButtonAction text="-" onClick={restar}/>
        <p>{count}</p>
        <ButtonAction text="+" onClick={sumar}/>
      </div>
    </main>
    
  )
}

export default IndexPage
