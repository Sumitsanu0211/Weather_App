import React from 'react'
import "./Style.css"

const Temp = () => {
  return (
    <>
    <div className="wrap">
      <div className="search">
            <input
            type='search'
            placeholder='earch...'
            autoFocus
            id='search'
            className='searchTerm'
            />
            <button className="searchButton" type='button'>
                  Search
            </button>
      </div>
    </div>
      
    </>
  )
}

export default Temp
