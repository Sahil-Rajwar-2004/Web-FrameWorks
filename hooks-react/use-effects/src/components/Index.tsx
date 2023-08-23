import { useEffect,useState } from "react";
import "./Index.css"

interface Props{}

export default function Demo({}: Props){
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log(`count: ${count}`);
    },[count]);

    return(
        <div className="container">
            <h1>Count: {count}</h1>
            <div className="btn">
                <button onClick={() => setCount(count+1)}>+1</button>
                <button onClick={() => setCount(count-1)}>-1</button>
            </div>
        </div>
    )
}
