import { useState } from 'react'
import './App.css'

function App() {
  const [inp, setInp] = useState("")
  const [list, setList] = useState([])

  const handleSubmit = function (e) {
    e.preventDefault()
    setList([...list, { value: inp, id: Math.floor(Math.random() * 100000) }])
    setInp("")
  }
  const handleDelete = function (id) {
    console.log(id);
    setList(list.filter((item) => {return item.id != id }))
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} >
        <input type="text" onChange={(e) => setInp(e.target.value)} value={inp} />
        <button>Add</button>
      </form>
      <div>
        {list?.map(elem => <div key={elem.id}>
          <span >{elem.value}</span>
          <button onClick={() => handleDelete(elem.id)}>x</button>
        </div>
        )}
      </div>
    </>
  )
}

export default App
