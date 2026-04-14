import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

function App() {

  let fooditems=["roti","rice","meat","ghee","milk"];
  return
  <React.Fragment>
  <h1> Healthy Foods </h1>
  <ErrorMessage></ErrorMessage>
  <FoodItems></FoodItems>
   </React.Fragment>
}

export default App
