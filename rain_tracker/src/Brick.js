import React, { useEffect } from "react"
import "./Brick.css"



const Brick = (props) => {

    var height = props.high
    var len = height.length
    var test = Array(len)    

    var trapArr = function(height) {
        var waterCount = Array(len).fill(0)

        let leftMax = 0
        let rightMax = 0
        
        let left = 0
        let right = height.length - 1

        while (left<right) {

            if (height[left] < height[right]){
                if (height[left] >= leftMax){
                    leftMax = height[left]
                }
                else {
                    waterCount[left] = leftMax - height[left]
                }
                left++
        }

        else{
            if (height[right] >= rightMax) {
                rightMax = height[right]
            }
            else {
                waterCount[right] = rightMax - height[right]
            }
            right--
        }
        }

        return waterCount
    };

    var mem = trapArr(height)

    for (let i=0; i<len; i++){
        test[i] = Array(height[i])
    }

    for (let i=0; i<len; i++){
        for (let j=0; j<height[i]; j++){
            test[i][j] = <div className="block"></div>
        }
        if (mem[i]>0){
            for (let j=0 ; j < mem[i] ; j++){
                test[i].push(<div className="water"></div>)
            }
        }
    }


    var stl = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <div style={stl}>
            <div className="row">
                {test.map((el, elId)=>{
                    return (
                        <div key={elId} className="column">
                            {el.map((pl,plId) =>{
                                return <div key={plId}>{pl}</div>
                            })}
                        </div>
                    )
                })}
        </div>
        </div>
    )
}

export default Brick