import React, { useState } from "react"
import axios from "axios";

const Text = () => {
    const [value, setValue] = useState("yes")

    async function example() {
        
        const response = await axios(
            "api/text",
            {
              method: "GET"
            }
          );
          setValue(response.data.hola);
    }
    return (
        <div onClick={() => example()}>
            {value}
        </div>
    )
}

export default Text