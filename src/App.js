import React , {useState} from 'react'
import Square from './components/Square'
import './App.css'
import { getByTitle } from '@testing-library/react'

const App = () => {
  const [x , setX] = useState(1)
  const [o , setO] = useState(0)
  const [winer , setWiner ] = useState(null)
  const [result , setResult ] = useState([
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    

  ])

  return (
    <div className='container'>

      <h1>{
          winer? (`the winner is ${winer}`): `tic tac toc `
        }</h1>

      <div className='game-body'>
        <Square winer={winer} setWiner={setWiner} result={result} setResult={setResult} id={1} x={x} o={o} />
        <Square winer={winer} setWiner={setWiner} result={result} setResult={setResult} id={2} x={x} o={o}  />
        <Square winer={winer} setWiner={setWiner} result={result} setResult={setResult} id={3} x={x} o={o}  />
        <Square winer={winer} setWiner={setWiner} result={result} setResult={setResult} id={4} x={x} o={o}  />
        <Square winer={winer} setWiner={setWiner} result={result} setResult={setResult} id={5} x={x} o={o}   />
        <Square winer={winer} setWiner={setWiner} result={result} setResult={setResult} id={6} x={x} o={o}  />
        <Square winer={winer} setWiner={setWiner} result={result} setResult={setResult} id={7} x={x} o={o}  />
        <Square winer={winer} setWiner={setWiner} result={result} setResult={setResult} id={8} x={x} o={o}  />
        <Square winer={winer} setWiner={setWiner} result={result} setResult={setResult} id={9} x={x} o={o}  />
      </div>

      <button onClick={() => window.location.reload()} className='btn'>Reset</button>
       

    </div>
  )
}

export default App