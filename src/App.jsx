import { useState } from 'react'
import './App.css'
import Course from './Course';
import html from './assets/img/html.png';
import css from './assets/img/css.png'
import js from './assets/img/js.png'
function App() {
  return (
    <>
    <Course name='HTML' price="$199" img={html} show={true} rating={4}/>
    <Course name='CSS' price="$299" img={css} show={true} rating={4}/>
    <Course name='JS' price="$499" img={js} show={true} rating={4}/>
    </>
  );
}

export default App

