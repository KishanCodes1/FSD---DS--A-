import React from 'react'
import Students from './components/Students'

const App = () => {
  return (
    <div style ={{display :'flex',flexwrap:'wrap', gap:'20px'}} >
      <Students/>
      <br/>
      <Students/>
      <br/>
      <Students/>
      <br/>
      <Students/>
      <br/>
      <Students/>
      <br/>
    </div>
  )
}

export default App