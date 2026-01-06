import {useState} from "react";

export const ColorChange = () =>  {
    const [userColor, setUserColor] = useState("skyblue");

    return (
        <div>
            <h3>Pick any color!</h3>

        <input type = "text"
        onChange={(e) => setUserColor(e.target.value)}
        placeholder= "What will you pick...?"
        />


        <div style={{ 
                width: '150px', 
                height: '150px', 
                backgroundColor: userColor, 
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px black'
            }}>
                {userColor}
            </div>
</div>
    
    );
};

