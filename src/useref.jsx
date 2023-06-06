import { useEffect, useRef, useState } from "react";

function UseRef() {
    const [count, setCount] = useState(0);
    const btnRef = useRef();

    useEffect(() => {
       const interval = setInterval(() => {
            document.title = `Use Ref Component called ${count}`;
            setCount(count + 1)
       }, 1000);

       return () => clearInterval(interval);
    }, [count]);

    function onClick() {
        btnRef.current.style.backgroundColor = "green";
        btnRef.current.style.fontSize = "50px";
    }

    return (
        <>
            <button ref={btnRef} onClick={onClick} className="form-btn">Change color</button>
            <br/>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat a in quasi, atque quo assumenda, perferendis numquam ratione culpa sequi officiis quia vero tempora sapiente ut totam ipsum. Qui, rem!
        </>
    )
}

export default UseRef;