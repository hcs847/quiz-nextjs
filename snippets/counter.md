---
slug: counter
title: react counter snippet
level: beginner
---
```javascript
import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0);
    const handleIncrementCounter = () => {
        setCounter(counter + 1)
    };
    const handleDecrementCounter = () => {
        setCounter(c => c - 1);
    }
    useEffect(() => {
        document.title = `Current counter ${counter}`;
    }, [counter]);

    return (
        <div className="App">
            <h1>Hello React Challenges</h1>
            <p style={{ fontWeight: '700' }}>{counter}</p>
            <button 
            type='button' 
            onClick={handleIncrementCounter} 
            style={{ margin: '3px' }}>+</button>
            <button 
            type='button' 
            onClick={handleDecrementCounter} 
            style={{ margin: '3px' }}>-</button>
        </div >
    );
}
```