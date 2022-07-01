import React from 'react'

function GifList({gifs}) {


  return (
    <ul>{gifs.map(({url}, index) => {
        return <li key={index}>
            <img src={url} alt="gif"></img>
            </li>
    })}</ul>
  )
}

export default GifList