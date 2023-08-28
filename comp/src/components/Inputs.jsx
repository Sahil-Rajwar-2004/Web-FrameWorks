import React from "react";
import "./input.css"

export const Input = ({placeholder,onChange}) => {
    const [value,setValue] = React.useState("");

    const handleInputs = (event) => {
        const val = event.target.value;
        setValue(val);
        onChange(val);
    };

    return (
        <input
        className="input-box"
        type="text"
        placeholder={placeholder}
        onChange={handleInputs}
        value={value}
        />
    )
}
