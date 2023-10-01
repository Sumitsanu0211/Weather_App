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
            <div className="description">
                  <div className="weatherCondition">Sunny</div>
                  <div className="place">Pune, India</div>
            </div>
      </div>
      <div className="date">{new Date().toLocaleString()}</div>
    </article>
      
    </>
  )
}

export default Temp
