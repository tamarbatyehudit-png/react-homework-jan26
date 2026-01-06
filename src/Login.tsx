import { useState } from "react";

export const Login = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState('');
        const [showWelcome, setShowWelcome] = useState(false);

        return (
            <div>
            <h3>Please log in</h3>

            <input
            placeholder="Username"
                onChange={(e) => setUser(e.target.value)}
        />

<input
type = "password"
placeholder="Password"
onChange={(e) => setPass(e.target.value)}
/>

<button onClick={() => setShowWelcome(true)}>
Login
</button>

{showWelcome && (
    <p>Welcome, {user}!</p>
)}

        </div>
            );

};

