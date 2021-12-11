import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TOP_URL } from 'utils/urls'

const TopRated = () => {
  const [wines, setWines] = useState([])

  useEffect(() => {
    fetch(TOP_URL)
      .then((res) => res.json())
      .then((json) => {
        setWines(json.response)
      })
  }, [])

  return (
    <>
      <div>
        <h1>Top rated wines</h1>
      </div>
      <section>
        {wines.map((wine) => (
          <div className="wineCard" key={wine.title}>
            <Link to={`/wines/${wine.title}`}>
                <p>{wine.title}</p>
                <p>{wine.points} points</p>
                <p>{wine.province}, {wine.country}</p>
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default TopRated