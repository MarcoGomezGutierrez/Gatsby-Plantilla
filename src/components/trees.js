import React, {useState, useEffect} from "react"

class Tree {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.durability = 3;
    }
}

/* Este componente de React se encarga de Generar el número de árboles que especifiques por parametro*/
const Trees = (props) => {

    const numTrees = props.numTrees;


    function addTrees () {
        const trees = []
        for (var i = 0; i < numTrees; i++) {
            trees.push(
                new Tree(
                    props.multiple(props.RandomMinToMax(props.width - props.steps)), /* X */
                    props.multiple(props.RandomMinToMax(props.height - props.steps)) /* Y */
                ))
        }
        return trees;
    }

    // eslint-disable-next-line
    const [trees, setTrees] = useState(() => addTrees()) /**Array de trees */

    //Le devuelve al Padre(game.js) el objeto trees con las posiciones de sus arboles, una copia del Array
    function setDataToParent(tree) {
        props.getTreesFromChild(tree)
    }

    useEffect(() => {
        setDataToParent(trees)
        // eslint-disable-next-line
    }, [setDataToParent])


    /*Estilo de los árboles */
    const PrintTree = ({x, y}) => {
        return (
            <div style={{
                position: "absolute", 
                width: props.steps, 
                height: props.steps, 
                backgroundColor: "green", 
                left: x, 
                top: y
            }}/>
        )
    }

    return (
        <div>
            {trees.map(tree => (
                <PrintTree x={tree.x} y={tree.y}/>
            ))}
        </div>
        
    )
}

export default Trees