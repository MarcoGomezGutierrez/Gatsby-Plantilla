import React, {useState, useEffect, useRef} from "react"
import * as Game from "../styles/game.module.css"
import imageWood from "../images/utils/wood.png"

const Inventory = () => {

    class Item {
      constructor(item, numItems) {
        this.item = item;
        this.numItems = numItems;
      }
    }
    const numItems = 40;

    const imageItem = {
      empty: '',
      wood: imageWood
    }

    function addItems () {
      const items = []
      for (var i = 0; i < numItems; i++) {
        items.push(new Item(imageItem.wood, i))
      }
      return items;
  }
    const [items, setItem] = useState(() => addItems())

    const PrintItem = ({item, numItems}) => {
      return (
          <div className={Game.gapInventory} style={{
            position: "relative",
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
        <div className={Game.inventory}>
          {items.map((item, index) => (
                <PrintItem key={index} item={item.item} numItems={item.numItems} />
          ))}
        </div>
    )
}

export default Inventory