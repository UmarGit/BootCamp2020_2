import React, {useState} from 'react';
import Nav from './Nav' ;
import Body from './Body' ;
import Footer from './Footer' ;
import './App.css';

function App() {
  let [darkMode, setDarkMode] = useState(false)
  let [count, setCount] = useState(0)
  return (
    <div className={` ${darkMode ? 'AppDark' : 'AppLight'} `}>
      <Nav header="Counter App" darkMode={darkMode} switchMode={()=> setDarkMode(!darkMode)}/>
      <Body caption="That's Why I love React !" darkMode={darkMode} counter={count} addCount={()=> setCount(++count)}/>
      <Footer footer="Created By" darkMode={darkMode}/>
    </div>
  );
}

export default App;
