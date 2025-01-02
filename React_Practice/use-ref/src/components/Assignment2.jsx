import React, { useState, useRef } from 'react';

export function Assignment2() {
    const [count, setCount] = useState(0);
    const numberOfRerender = useRef(0);

    const handleReRender = () => {
        setCount((prevCount) => prevCount + 1);
    };

    
    numberOfRerender.current += 1;

    return (
        <div>
            <p>This component has rendered {numberOfRerender.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};
