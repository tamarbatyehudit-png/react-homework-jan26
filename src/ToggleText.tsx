
import { useState} from "react";

export const ToggleText = () => {
  const [show, setShow] = useState(true);
  return (
    <section>
      <button onClick={() => setShow(!show)}>Toggle Text</button>
      {show && <p>Hello! This is working.</p>}
    </section>
  );
};

// import {useState} from "react";
// export const ToggleText = () => {
// const [show,setShow] = useState(true);
//return (
//<section>
//<button onClick={() => setShow(!show)}>Toggle text</button>
// {show && <p>Hello - Working</p>}
//</section>
//);
//};