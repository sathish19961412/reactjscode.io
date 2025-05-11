import { useState } from 'react'
import './App.css'
import Course from './Course';
import html from './assets/img/html.png';
import css from './assets/img/css.png'
import js from './assets/img/js.png'
function App() {
  return (
    <>
    <Course name='HTML' price="$199" img={html}/>
    <Course name='CSS' price="$299" img={css}/>
    <Course name='JS' price="$499" img={js}/>
    </>
  );
}

export default App

