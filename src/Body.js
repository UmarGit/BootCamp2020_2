import React from 'react';
import Content from './Content';
import Counter from './Counter';

function Body(props) {
  return (
    <main className={` ${props.darkMode ? 'mainDark' : 'mainLight'} `} >
        <Content content="React is a JavaScript library for building user interfaces and I love React !"/>
        <Counter counter={props.counter} addCount={props.addCount} darkMode={props.darkMode}/>
        <Content content="React is Declarative"/>
        <Content content="React is Component-Based"/>
        <Content content="React is Learn Once, Write Anywhere"/>
        <br/>
        {props.caption} <span role="img" aria-label="emoji">😍</span>
    </main>
  );
}

export default Body;
