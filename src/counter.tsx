import {useState} from 'react';

interface CounterProps {startValue: number;

}

function Counter ({startValue}: CounterProps) {
    const [count, setCount] = useState(startValue);
const handleIncrement = () => {
    setCount(count+1);
};
return (
    <div style = {{border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
        <h2>Number: {count}</h2>
    <button onClick={handleIncrement}>Increase by 1</button>
    </div>
)
}

export default Counter;