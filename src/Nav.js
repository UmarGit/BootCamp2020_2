import React from 'react';

function Nav(props) {
  return (
    <header className={` ${props.darkMode ? 'headerDark' : 'headerLight'} `}>
      <span role="img" aria-label="emoji">❤️</span> {props.header} <span> <button className={` ${props.darkMode ? 'buttonDark' : 'buttonLight'} `} onClick={ props.switchMode }>Switch to {props.darkMode ? ' LightMode' : ' DarkMode'}</button></span>
    </header>
  );
}

export default Nav;
