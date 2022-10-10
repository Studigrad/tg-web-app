import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;
function App() {
  
  useEffect(()=>{
    tg.ready();
  })
  const onClose = ()=>{
    console.log('Closed')
      tg.close();
  }
  return (
    <div className="App">
      Hello Wolrd
      <button onClick={onClose}>Sumbit</button>
    </div>
  );
}

export default App;
