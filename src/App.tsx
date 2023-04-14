import { useEffect, useState } from 'react';
import './App.css';
import Controls from './Controls';
import GLWrapper from './GLWrapper';
import { addEventListeners, removeEventListeners } from './MouseEvents/EventListeners';

function App() {
  const [controlsWidth, setControlsWidth] = useState(100);
  useEffect(()=>{
    addEventListeners();
    return ()=>{
      removeEventListeners();
    }
  }, []);

  return (
    <main
    id='App'
    >
      <Controls/>
      <GLWrapper/>
    </main>
  );
}

export default App;
