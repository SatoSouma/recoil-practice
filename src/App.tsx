import './App.css'
import React from 'react'
import { AtomFamily } from './components/AtomFamily/AtomFamily'
import { RecoilStart } from './components/RecoilStart/RecoilStart'
import { StateCall } from './components/StateCall/StateCall'

const App: React.FC = () => {
  return (
    <>
      <AtomFamily itemName="鯉" numName={4} />
      <AtomFamily itemName="鯖" numName={9} />
      <StateCall />
      <RecoilStart />
    </>
  )
}

export default App
