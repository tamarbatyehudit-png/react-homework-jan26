import { useState } from "react";

export {useState} from "react";

export const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
        <button
            onClick = {() => setIsOn(!isOn)}
            style = {{
                backgroundColor: isOn ? "orange" : "grey",
                color: "beige",
            }}
            >
            {isOn? "ON" : "OFF"}
        </button>
        
        </div>
    );
};