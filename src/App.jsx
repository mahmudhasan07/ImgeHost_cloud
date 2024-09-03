import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const imgref = useRef()

  const handleImage = (e) => {
    e.preventDefault()
    const data = imgref.current.files
    if(data[0]){
      const fromData = new FormData()
    fromData.append('file', data[0])
    fromData.append("upload_preset", 'TestProject')
    fromData.append("API Key",'782511455626184')
    // fromData.append('API Secret', "JeDFF58hg22nlDdi1kuDu54sRwY")
    axios.post('https://api.cloudinary.com/v1_1/daudgshta/upload', fromData)
      .then(res => {
        console.log(res);

      })
      .catch(err => {
        console.log(err)
      })
    }


  }

  return (
    <>
      <input ref={imgref} onChange={handleImage} type="file" />
    </>
  )
}

export default App
