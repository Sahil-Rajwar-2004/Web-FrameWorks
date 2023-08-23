import React, { useMemo } from "react";
import "./SqrdVal.css"

function Comp({value}){
    const sqrdVal = useMemo(() => {
        console.log("squared values: ");
        return value*value;
    },[value]);
    return (
        <div>
            squared: {sqrdVal}
        </div>
    )
}

export default Comp;
