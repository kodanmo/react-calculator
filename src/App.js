import React, { useState } from 'react'
import './App.css'

function App() {

  const [num, setNum] = useState("")
  const [res, setRes] = useState("")


  const up =(value)=>{

    setNum(num+value)

  }


  const cdigit =()=>{
     const digit = [];
     for(let i=1;i<10;i++)
     {
      digit.push(<button onClick={()=>{up(i)}}>{i}</button>)
     }
     return digit;
  } 


  return (
    <div className='Appr '>
       
      <div className='calculator'>

        <div className='display'>
          <span>(0)</span>{num || '0'}
        </div> 

        <div className='operators'>
            <button onClick={()=>{up('+')}}>+</button>
            <button onClick={()=>{up('-')}}>-</button>
            <button onClick={()=>{up('*')}}>*</button>
            <button onClick={()=>{up('/')}}>/</button>
            <button onClick={()=>{up('+')}}>DEL</button>
        </div>

        <div className='digits'>
             {cdigit()}
             <button onClick={()=>{up('+')}}>0</button>
             <button onClick={()=>{up('+')}}>=</button>
             <button onClick={()=>{up('+')}}>.</button>
        </div> 

      </div>
    
    </div>
  )
}

export default App