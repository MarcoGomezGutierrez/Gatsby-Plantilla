import React, {useState, useRef} from "react"
import * as Game from "../styles/game.module.css"
import CraftTable from "../components/craftTable.js"
import Inventory from "../components/inventory.js"


const InventoryCraftTable = (props) => {
    /*const inventoryRef = useRef(null);

    const buttonRadius = {
        width: 70,
        height: 70,
        borderRadius: 100,
        border: '5px solid #137247',
        backgroundColor: '#0FA461',
        cursor: 'pointer'
    }

    function hidden() {
        inventoryRef.current.style.visibility = 'hidden';
    }
    
    

    const Desktop = () => {
    return (
        <div  ref={inventoryRef} className={Game.containerInventory}>
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
        <div  ref={inventoryRef} className={Game.containerInventory}>
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
    }*/
    return (
        <div>
            {/*props.width > 700 ? <Desktop/> : <Mobile/>*/}
        </div>
        
    )
}

export default InventoryCraftTable