import React, {useEffect, useState} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
    const [gifs, setGifs] = useState([])
    const [gifsSearch, setGifsSearch] = useState("")

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${gifsSearch}&api_key=gyM5xzuZrdjEKAw0WaVw8250tmMc1ws5&rating=g`)
        .then(resp => resp.json())
        .then(({data}) => {
           const newData = data.slice(0,3).map(gif => {
            return {url: gif.images.original.url}
        })
            setGifs(newData)
        })
    }, [gifsSearch])

    const onSearchFormSubmit = (userInput) => {
        setGifsSearch(userInput)
    }

  return (
    <div>
        <GifSearch onSearchFormSubmit= {onSearchFormSubmit}/>
        <GifList gifs={gifs}/>
    </div>
    
  )
}

export default GifListContainer