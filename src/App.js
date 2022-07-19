import React, { useState } from 'react'
import './App.css'

function App() {


  const cdigit =()=>{
     const digit = [];
     for(let i=1;i<10;i++)
     {
      digit.push(<button>{i}</button>)
     }
     return digit;
  } 


  return (
    <div className='Appr '>
       
      <div className='calculator'>

        <div className='display'>
          <span>(0)</span>0
        </div> 

        <div className='operators'>
            <button >+</button>
            <button >-</button>
            <button >*</button>
            <button >/</button>
            <button >DEL</button>
        </div>

        <div className='digits'>
             {cdigit()}
             <button >0</button>
             <button >=</button>
             <button >.</button>
        </div> 

      </div>
    
    </div>
  )
}

export default App