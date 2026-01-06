import { useState } from "react";

export const ToDoList = () => {
  const [list, setList] = useState<string[]>([]);
  const [text, setText] = useState("");

  const add = () => {
    if (text.trim() !== "") {
      setList([...list, text]);
      setText("");
    }
  };

  return (
    <section>
      <input
        value={text}
        placeholder="Add a task..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={add}>Add</button>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

