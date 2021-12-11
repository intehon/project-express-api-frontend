
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { WINE_URL } from 'utils/urls'
import styled from 'styled-components'

const WineList = () => {
  const [wines, setWines] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(WINE_URL)
      .then((res) => res.json())
      .then((json) => {
        setWines(json.results)
      })
  }, [page])


  const nextPage = () => {
    setPage(page + 1)
  }
  const previousPage = () => {
    setPage(page - 1)
  }

  const startIndex = (page - 1)

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black'
  }

  const FlexContainer = styled.section`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 15px;
    width: 50vw;
  `

  const WineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: solid black 1px;
    padding: 10px;
  `
  const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
`
const PointsContainer = styled.div`
    display: flex;
    flex-direction: column;
  `
  

  return (
    <>
      <div>
        <h1>Wines</h1>
      </div>

      <div>
        <button
        type="button"
        onClick={previousPage} 
        disabled={startIndex < 0}>Previous Page</button>
        <button
        onClick={nextPage}
        >Next Page</button>
      </div>


      <FlexContainer>
          {wines.map((wine) => {
            return (
              <Link to={`/wines/titles/${wine.title}`} style={linkStyle}>
                <WineContainer>
                  <TitleContainer>
                    <h1>{wine.title}</h1>
                    <h3>{wine.province}, {wine.country}</h3>
                    <h4>- {wine.taster_name}</h4>
                  </TitleContainer>
                  <PointsContainer>
                    <h1>{wine.points} points</h1>
                    {wine.price && <h1>$ {wine.price}</h1>}
                  </PointsContainer>
                </WineContainer>
              </Link>
          )})}
      </FlexContainer>
    </>
  )
}

export default WineList