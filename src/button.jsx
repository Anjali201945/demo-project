import { Component, useEffect, useState } from "react";
import { colorArray } from "./color";

function Button() {
    const [count, setCount] = useState(0);
    const [bgcolor, setBgcolor] = useState("pink");
    const [condition, setCondition] = useState(false);

    return (
        <div className="button">
            <button onClick={() => {
                setBgcolor(colorArray[Math.floor(Math.random() * colorArray.length)]);
                setCondition(!condition);
            }} style={{ backgroundColor: bgcolor, color: ["blue", "black", "purple", "green", "brown", "grey", "skyblue", "red", "pink"].includes(bgcolor) && "white" }}>start</button>
        </div>
    )
}
export default Button;
// class Button extends Component{
// constructor(){
//     super();
// }
// render(){
//     return(
//         <div className="button">
//              <button onClick={()=> {
//                 //  setBgcolor (colorArray[Math.floor(Math.random()*colorArray.length)]);
//                 //  setCondition(!condition);
//             }}
//             style={{backgroundColor:"blue",color:"white"}}
//             >{this.props.title}</button>
//         </div>
//     )
// }
// }
// export default Button;