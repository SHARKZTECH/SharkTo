
import { useState } from 'react'
import {Navbar,Footer,Welcome,Services,Transactions} from "./components"
import './App.css'

function App() {

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
  </div>
  )
}

export default App
