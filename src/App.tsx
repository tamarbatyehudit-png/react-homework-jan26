
import { Login } from "./Login";
import { ToggleText } from "./ToggleText";
import { Saba } from "./Saba";
import { ToDoList } from "./ToDoList";
import { MirrorInput } from "./MirrorInput";
import { ToggleButton } from "./ToggleButton";
import { ParentChild } from "./ParentChild";
import {ColorChange} from "./ColorChange"; 
import { ColorMagic } from "./ColorMagic"

// MASTER APP - The "Table of Contents"
export default function App() {
  return (
    <main style={{ padding: "40px", lineHeight: "1.6" }}>
      <h1>Homework 21</h1>

      <h3>1. Login Component</h3>
      <Login />

      <hr />

      <h3>2. Toggle Component</h3>
      <ToggleText />

      <hr />

      <h3>3. Props (Saba)</h3>
      <Saba />

      <hr />

      <h3>4. To-Do List</h3>
      <ToDoList />

      <h3>5. Mirror Input</h3>
      <MirrorInput />

      <h3>6. Toggle Lights</h3>
      <ToggleButton />

      <h3>7. Parent Child</h3>
      <ParentChild />

      <h3>8. Color Change</h3>
      <ColorChange/>

      <h3>9. Color Magic</h3>
      <ColorMagic/>
    </main>
  );
}
