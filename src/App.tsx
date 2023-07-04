import { useEffect, useState } from 'react';
import './App.css';
import Controls from './Components/Controls';
import GLWrapper from './Components/GLWrapper';
import { addEventListeners, removeEventListeners } from './Events/EventListeners';
import GraphMgr from './GraphManager/GraphMgr';

function App() {
  const [gmgr, setGmgr] = useState(new GraphMgr());
  // useEffect(()=>{
  //   addEventListeners();
  //   return ()=>{
  //     removeEventListeners();
  //   }
  // }, []);

  return (
    <main
    id='App'
    >
      <Controls gmgr={gmgr} updateGmgr={()=>setGmgr(g=>Object.assign(new GraphMgr(), g))}/>
      <GLWrapper gmgr={gmgr}/>
    </main>
  );
}

export default App;
