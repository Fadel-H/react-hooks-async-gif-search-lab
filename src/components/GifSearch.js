import React, {useState} from 'react'

function GifSearch({onSearchFormSubmit}) {
const [searchInput, setSearchInput]= useState("")

    function handleSubmit(e){
        e.preventDefault()
        onSearchFormSubmit(searchInput)
    }

    function handleChange(e){
        setSearchInput(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter a Search Term:</label>
            <input type="text" value={searchInput} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default GifSearch