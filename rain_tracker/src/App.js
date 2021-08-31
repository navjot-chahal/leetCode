import React, { useState, useRef } from 'react';
import Brick from "./Brick"

var height = []


const App = () => {

    const [brick, setBrick] = useState(false)
    const inputRef = useRef()


    function clicked(e){

        let inp = inputRef.current.value
        height = inp.split(",")

        for (let i=0; i<height.length; i++){
            height[i] = parseInt(height[i])
        }

        setBrick((prev) => !prev)

        e.preventDefault()
    }

    return (
        <>
            <form>
                <label>Array elements: </label>
                <input ref={inputRef}/>
                <button onClick={clicked} type="submit"> Enter</button>
            </form>
            {brick? <Brick high={height} /> : null}
        </>
    )
}
export default App;