import { useEffect, useState } from 'react';
import './App.css';
import Controls from './Components/Controls';
import GLWrapper from './Components/GLWrapper';
import { addEventListeners, removeEventListeners } from './Events/EventListeners';

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
