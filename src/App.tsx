import './App.css'
import React from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

const App: React.FC = () => {
  return (
    <>
      <Header itemName="鯉" numName={4} />
      <Header itemName="鯖" numName={9} />
      <Footer />
    </>
  )
}

export default App
