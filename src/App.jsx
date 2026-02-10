import { useState } from 'react' 
import './App.css'
import ClickButton from './ClickButton'
import MouseHover from './MouseHover'
import DoubleClick from './DoubleClick'
import Counter from './Counter'

function App() { 
  return(
    <div>
      <h1>React Project</h1>
      <ClickButton></ClickButton>
      <MouseHover/>
      <DoubleClick/>
    </div>
  )
}

export default App
