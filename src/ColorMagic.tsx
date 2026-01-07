import {useState} from "react";

export const ColorMagic = () => {
    const [color, setColor] = useState ("rebeccapurple");

return ( 
    <div style = {{ padding: "30px", textAlign: "center"}}>
        <h2>Color magic!</h2>
    
<div style = {{
    width: "200px", 
        height: "200px", 
        backgroundColor: color, 
        margin: "20px auto",
        borderRadius: "15px",
        transition: "all 0.5s ease", // This makes the color fade in smoothly!
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold"
    }}>
        {color}
    </div>

<input 
type = "text"
placeholder = "Pick a color...!"
onChange = {(e) => setColor(e.target.value)} 
 style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }}
/>

<p> Try Gold! Hotpink! Whatever!</p>
</div>


);
};