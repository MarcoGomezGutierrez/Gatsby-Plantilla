import React, {useState, useEffect} from "react"


class Tree {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const PrintTree = ({x, y}) => {
    return (
        <div style={{
            position: "absolute", 
            width: 10, 
            height: 10, 
            backgroundColor: "green", 
            left: x, 
            top: y
        }}/>
    )
}

const Trees = (props) => {

    function addTrees () {
        const trees = []
        for (var i = 0; i < 100; i++) {
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

    function setDataToParent(tree) {
        props.getTreesFromChild(tree)
    }

    useEffect(() => {
        setDataToParent(trees)
        // eslint-disable-next-line
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