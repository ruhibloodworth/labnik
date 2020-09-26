import React, {useState, useEffect} from 'react'
import './tailwind.output.css'

const App = () => {
  const [msg, setMsg] = useState('Loading...')
  useEffect(() => {
    const loadMsg = async () => {
      const resp = await fetch('/api/msg')
      const data = await resp.json()
      setMsg(data["msg"])
    }
    loadMsg()
  }, [])

  return (
  <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
    <div className="ml-6 pt-1">
      <h1 className="text-2xl text-blue-700 leading-tight">
        {msg}
      </h1>
      <p className="text-base text-gray-700 leading-normal">
        Building apps together
      </p>
    </div>
  </div>
)}

export default App;
