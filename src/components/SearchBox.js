import React, { useEffect, useState } from 'react'
import axios from 'axios'

function SearchBox({ click }) {
  // 
  const [inputData, setInputData] = useState("")
  const [suggestion, setSuggestion] = useState([])
  

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/?name=${inputData}`)
      .then(data => setSuggestion(data.data?.results))
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setSuggestion(null)
          console.clear()
        }
    })
  }, [inputData])

  return (
    <form className="wrapper" onSubmit={(e)=>click(e, suggestion)}>
      <input
        type="text"
        placeholder="Type a location ID"
        name='inputData'
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        list="browsers"
      />
      <datalist id="browsers">
        { suggestion &&
          suggestion.map((el, index) => (
            <option key={index} value={el.name}/>
          ))
        }
      </datalist>
      <button className="form-button">Search</button>
    </form>
  )
}

export default SearchBox;