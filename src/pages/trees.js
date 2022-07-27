import React, {useState, useEffect} from "react"


class Tree {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }



function multiple(valor) {
    if ((valor % 10) === 0) return valor;
    else return multiple(valor + 1);
}

function RandomMinToMax (max) {
    return Math.floor(Math.random() * max);
}

const PrintTree = ({x, y}) => {
    return (
        <div style={{position: "absolute", width: 10, height: 10, backgroundColor: "green", left: x, top: y}}/>
    )
}

const Trees = (props) => {

    
    function addTrees () {
        const trees = [new Tree(multiple(RandomMinToMax(500 - 10)), multiple(RandomMinToMax(500 - 10)))]
        for (var i = 0; i < 500; i++) {
            trees.push(new Tree(multiple(RandomMinToMax(500 - 10)), multiple(RandomMinToMax(500 - 10))))
        }
        return trees;
    }
    const [trees, setTrees] = useState(() => addTrees()) /**Array de trees */

    function setDataToParent(tree) {
        props.getTreesFromChild(tree)
    }
    
    useEffect(() => {
        setDataToParent(trees)
    }, [setDataToParent])

    return (
        <div>
            {trees.map(tree => (
                <PrintTree x={tree.x} y={tree.y}/>
            ))}
        </div>
        
    )
}

export default Trees