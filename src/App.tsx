import { useEffect, useState } from 'react';
import './App.css';
import Controls from './Components/Controls';
import GLWrapper from './Components/GLWrapper';
import { addEventListeners, removeEventListeners } from './Events/EventListeners';

function App() {
  const [controlsWidth, setControlsWidth] = useState(100);
  const [statements, setStatements] = useState<string[]>(['1.0>x*x+y*x']);
  // useEffect(()=>{
  //   addEventListeners();
  //   return ()=>{
  //     removeEventListeners();
  //   }
  // }, []);

  function setStatementAt(i:number, s:string){
    setStatements(stm=>{
      let rtn = [...stm];
      rtn[i] = s;
      return rtn;
    });
  }

  return (
    <main
    id='App'
    >
      <Controls setStatementAt={setStatementAt}/>
      <GLWrapper statements={statements}/>
    </main>
  );
}

export default App;
