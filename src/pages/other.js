import * as React from "react"
import * as style from "../styles/index.module.css"
import Header from "../components/Header"
import Menu from "../components/menu.js"

// markup
const OtherPage = () => {
  return (
    <main>
      <Header headerText="INFO PAGE"/>
      <Menu/>
      <p className={style.p}>El archivo "global.css" nos sirve para configurar un estilo global para toda la páginas de nuestro proyecto. 
        De estas forma para que Gatsby lo aplique debe de haber un archivo en la raiz de nuestro proyecto llamado "gatsby-browser.js" de esta forma y 
        poniendo en la consola el comando siguiente: 
      </p>
      <div className={style.console}>$ yarn develop</div>
      <p className={style.p}>1. Para poder actualizar un valor en tiempo real con React debemos de utilizar un import de react:</p>
      <div className={style.console}>import React, &#123; useState &#125; from "react"</div>
      <p className={style.p}>2. Luego debemos de crear la variable que vallamos a modificar:</p>
      <div className={style.console}>const [count, setCount] = useState(1);</div>
      <p className={style.p}>3. Y finalmente para modificar el valor:</p>
      <div className={style.console}>
        const sumar = &#40;&#41; =&#62; &#123; 
        <br/> &nbsp;&nbsp;&nbsp;&nbsp; setCount &#40; count + 1 &#41; 
        <br/> &#125;   
      </div>
    </main>
    
  )
}

export default OtherPage