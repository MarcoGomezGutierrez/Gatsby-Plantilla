import React, {useState} from "react"
import imageWood from "../images/utils/wood.png"
import * as Game from "../styles/game.module.css"

const CraftTable = () => {

    class Item {
      constructor(item, numItems) {
        this.item = item;
        this.numItems = numItems;
      }
    }
    const numItems = 9;

    const imageItem = {
      empty: '',
      wood: imageWood
    }

    function addItems () {
      const items = []
      for (var i = 0; i < numItems; i++) {
        items.push(new Item("", 0))
      }
      return items;
  }
    const [items, setItem] = useState(() => addItems())

    const PrintItem = ({item, numItems}) => {
      return (
          <div className={Game.gapInventory} style={{
            position: "relative",
            flex: 3,
            backgroundImage: `url(${item})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}><div style={{
            position: "absolute",
            bottom: -4,
            right: 1,
            fontWeight: "bold"
          }}>{numItems}</div></div>
      )
  }

    return (
        <div className={Game.craftTable}>
          {items.map((item, index) => (
                <PrintItem key={index} item={item.item} numItems={item.numItems} />
          ))}
        </div>
    )
}

export default CraftTable