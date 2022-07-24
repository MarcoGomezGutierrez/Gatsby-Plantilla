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
    <main className={style.indexContainer}>
      <Header headerText="INDEX"/>
      <div className={style.navbar}>
        <ButtonPath text="Go to other page" direction="/other"/> 
        <ButtonPath text="Go to game page" direction="/game"/> 
        <ButtonAction text="+" onClick={sumar}/>
        <p>{count}</p>
        <ButtonAction text="-" onClick={restar}/>
      </div>
    </main>
    
  )
}

export default IndexPage
