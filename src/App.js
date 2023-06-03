import react from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Main from './Components/Main/Main';
/* Call api async function
   Pass data as props to Main component
*/
import { createContext } from 'react';
export const ThemeContext = createContext(null);
function App() {
  const [data, setData] = useState(null);
  
  useEffect(function() {
    async function fetchData() {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
    setData(data);
     }
     fetchData();
}, []);

  return (
    <div className="App">
      {data && <Main data={data} />}
    </div>
  );
}

export default App;
