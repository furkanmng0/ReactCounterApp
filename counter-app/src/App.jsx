import { useState } from 'react'
import './App.css'

function App() {

  const [count,setCount]=useState(0);
  const [resetMessage,setResetMessage]=useState("");

  const increase=()=>{
    setCount(count+1)
    setResetMessage("")
  }

  const decrease=()=>{
    setCount(count-1)
    setResetMessage("")
  }

  const reset=()=>{
    setCount(0)
    setResetMessage("Sıfırlandı")
  }

  const condition=()=>{
    if(count%10==0 && count !==0){
      return <p className='cong'>Tebrikler {count} oldu 🎉</p>
    }
    return null;
  }

  return (
   <div className='container'>
    
    <h1>Sayaç Uygulaması</h1>
    <h2 className='count'>{count}</h2>
    {condition()}

    { <p className="reset-msg">{resetMessage}</p>}


    <div className='button-group'>


    <button className='btn-increase' onClick={increase}>Arttır</button>
    <button className='btn-decrease' onClick={decrease}>Azalt</button>
    <button className='btn-reset' onClick={reset} >Sıfırla</button>

    </div>
   </div>
  )
}

export default App
