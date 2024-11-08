import './App.css';
import { data } from './module-data'
import PersonProfile from './components/PersonProfile';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [alert, setAlert] = useState("")

  return (
    <div className='container'>
      <h1>Osoby</h1>
      <a href="http://backend:4000">Backend</a>
      <div className='row g-3'>
        {data.map((person, index) => <PersonProfile key={person.id} person={person} />)}
      </div>
    </div>
  );
}

export default App;
