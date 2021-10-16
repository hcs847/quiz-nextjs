---
slug: dropdown
title: react dropdown snippet
level: beginner
---
```javascript
import { useState, useEffect } from 'react';
import './App.css';
 
function App() {
 // dataset from API
 const [astro, setAstro] = useState('');
 // input for dropdown
 const [astroInput, setAstroInput] = useState('Start typing');
 // selected astro to display on page with additional details
 const [astroSelected, setAstroSelected] = useState('');
 
 
 // fetching astro's data from api on page load (componentDidMount)
 const getastro = () => {
   fetch('http://api.open-notify.org/astros.json')
     .then(res => res.json())
     .then(data => setAstro(data.people))
     .catch(err => console.error(err));
 }
 useEffect(() => {
   getastro();
   console.log("useEffect=", astro);
 }, []);
 
 // function to handle form submit
 const hanldeDropdownSelection = (event) => {
   // prevent submit to page
   event.preventDefault();
   // set the selected astro to the option value field
   setAstroSelected(astroInput);
   // clear input
   setAstroInput('');
 };
 
 return (
   <div className="App">
     <form>
       <label>Select an Astronaut </label>
       <input
         // connection list to id, autocomplete is the default
         list='astronauts'
         type="text"
         value={astroInput}
         onClick={() => setAstroInput('')}
         onChange={(e) => setAstroInput(e.target.value)}
         onBlur={hanldeDropdownSelection}
         disabled={!astro.length}
       />
       <datalist id='astronauts'>
         {astro && (astro.map(astronaut =>
           <option key={astronaut.name} value={astronaut.name}>
             {astronaut.name}
           </option>
         )
         )}
       </datalist>
       <button type='button' style={{ margin: '2px' }}>Submit</button>
     </form>
 
     {/* filter data fetched based on selection made */}
     {astroSelected && (
       astro.filter(selectedAstro => selectedAstro.name === 
astroSelected).map(astronaut => (
         <ul key={astronaut.name}>
           <li>Selected Astro's name: {astronaut.name}</li>
           <li>Astro's vehicle: {astronaut.craft}</li>
         </ul>
       )
       )
     )}
   </div >
 );
}
 
export default App;
```