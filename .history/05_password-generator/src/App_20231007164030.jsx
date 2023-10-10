import { useState } from 'react'

function App() {

  const [password, setPassword] = useState('')
  const [length, setLength] = useState(6)
  const [isnum, setIsNum] = useState(false)
  


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator!</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          />
        </div>
      </div>
    </>
  )
}

export default App