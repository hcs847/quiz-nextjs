---
slug: fetch
title: react fetch snippet
level: beginner
---
```javascript
import { useState, useEffect } from 'react';
import './App.css';
 
function App() {
 const [person, setPerson] = useState('');
 
 // fetching person's data from api
 // fetched result updating state
 const getPerson = () => {
   fetch('https://randomuser.me/api')
     .then(res => res.json())
     .then(data => setPerson(data.results[0].name))
     .catch(err => console.error(err));
 }
 useEffect(() => {
   getPerson();
   console.log(person)
 }, []);
 
 return (
   <div className="App">
     <h1>Hello React Challenges</h1>
     <button type='button' onClick={getPerson}>Get Person</button>
     <p>Name: {person.first} {person.last}</p>
   </div >
 );
}
 
export default App;
```