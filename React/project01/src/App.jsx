// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Component/Card"



function App() {
  return (
    < div className="App" >
      <h1>My Products</h1>
      <Card
        title="Card 1"
        link="https://picsum.photos/200"
        loaded="Picture 1"
        desc=" This is my card 1"
      />

      <Card
        title="Card 2"
        link=" https://picsum.photos/201"
        loaded="Picture 2"
        desc=" This is my card 2"
      />

      <Card
        title="Card 3"
        link="https://picsum.photos/202 "
        loaded="Picture 3"
        desc=" This is my card 3"
      />

      <Card
        title="Card 4"
        link=" https://picsum.photos/203"
        loaded="Picture 4"
        desc=" This is my card 4"
      />

    </div>
  )
}

export default App