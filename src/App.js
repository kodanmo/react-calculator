import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import { renderIntoDocument } from 'react-dom/test-utils';
import './App.css'

function App() {

  const [num, setNum] = useState("")
  const [res, setRes] = useState("")

  const op = ['+','-','*','/','.'];

  const re =()=>{
    setNum(eval(num).toString())
  }

  const de=()=>{
    if(num==="")
    {
      return;
    }

    const rum = num.slice(0,-1)
    setNum(rum)

  }


  const up =(value)=>{
    if(op.includes(value) && num==="" || op.includes(value) && op.includes(num.slice(-1)))
    {
      return;
    }
    setNum(num+value)
    if(!op.includes(value))
    setRes(eval(num+value).toString())

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
          {res?<span>({res})</span>:''} {num || '0'}
        </div> 

        <div className='operators'>
            <button onClick={()=>{up('+')}}>+</button>
            <button onClick={()=>{up('-')}}>-</button>
            <button onClick={()=>{up('*')}}>*</button>
            <button onClick={()=>{up('/')}}>/</button>
            <button onClick={()=>{de()}}>DEL</button>
        </div>

        <div className='digits'>
             {cdigit()}
             <button onClick={()=>{up('+')}}>0</button>
             <button onClick={()=>{re()}}>=</button>
             <button onClick={()=>{up('+')}}>.</button>
        </div> 

      </div>
    
    </div>
  )
}

export default App