import { useEffect, useState } from "react";
import Boxs from "./boxs";

export const colorArray = ["red", "blue", "black", "skyblue", "purple", "green", "brown", "grey"];

function Colors() {
    const [count, setCount] = useState(0);
    const duplicateArray = Array.from({ length: 100 }).map(() => ({ color: "" }));
    const [colors, setColors] = useState(duplicateArray);

    useEffect(() => {
        const interval = setInterval(() => {
            const upDateArray = colors.map((ele, i) => {
                if (count === i) {
                    return {
                        color: colorArray[Math.floor(Math.random() * colors.length)]
                    }
                } else {
                    return ele
                }
            })
            setColors(upDateArray);
            setCount(count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [colors, count]);

    // function onClick(index) {
    //     const upDateArray = colors.map((ele, i) => {
    //         if (index === i) {
    //             return {
    //                 color: colorArray[Math.floor(Math.random() * colors.length)]
    //             }
    //         } else {
    //             return ele
    //         }
    //     })
    //     setColors(upDateArray);
    // }

    return (
        colors.map((ele, i) => (
            <Boxs index={i} color={ele?.color} />
        ))
    )
}
export default Colors;