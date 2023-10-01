import React from 'react'
import "./Style.css"

const Temp = () => {
  return (
    <>
    <div className="wrap">
      <div className="search">
            <input
            type='search'
            placeholder='scearch...'
            autoFocus
            id='search'
            className='searchTerm'
            />
            <button className="searchButton" type='button'>
                  Search
            </button>
      </div>
    </div>
    {/* our weather card */}
    <article className="widget">
      <div className="weatherIcon">
            <i className={"wi wi-day-sunny"}></i>
      </div>
      <div className="weatherInfo">
            <div className="temperature">
                  <span>25.6&deg;</span>
            </div>
      </div>
    </article>
      
    </>
  )
}

export default Temp
