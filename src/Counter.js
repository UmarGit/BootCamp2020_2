import React from 'react';

function Counter(props) {
  return (
    <div>
        <h1>Counter : {props.counter}</h1>
        <button className={` ${props.darkMode ? 'buttonDark' : 'buttonLight'} `} onClick={ props.addCount }>{props.counter > 2 ? 'Add More :) >>' : ' Please Add Some :( >>'} {props.counter}</button>
    </div>
  );
}

export default Counter;
