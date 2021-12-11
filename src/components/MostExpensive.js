import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PRICE_URL } from 'utils/urls'
import styled from 'styled-components'

const MostExpensive = () => {
  const [wines, setWines] = useState([])

  useEffect(() => {
    fetch(PRICE_URL)
      .then((res) => res.json())
      .then((json) => {
        setWines(json.response)
      })
  }, [])

  const WineCard = styled.div`
    background: white;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);
    padding: 20px;
    border-radius: 5px;  
    `


  return (
    <>
      <div>
        <h1>Most expensive wines</h1>
      </div>
      <section>
        {wines.map((wine) => (
          <WineCard key={wine.title}>
            <Link to={`/wines/${wine.title}`}>
                <p>{wine.title}</p>
                <p>{wine.price} $</p>
                <p>{wine.points} points</p>
                <p>{wine.province}, {wine.country}</p>
            </Link>
          </WineCard>
        ))}
      </section>
    </>
  )
}

export default MostExpensive