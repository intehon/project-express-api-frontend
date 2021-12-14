import React, { useState, useEffect } from 'react'
import { PRICE_URL } from 'utils/urls'
import styled from 'styled-components'
import header from 'images/header-img.png'

const ContentWrapper = styled.section`
display: flex;
flex-direction: column;
background: #FEF4E8;
opacity: 0.85;
align-items: center;
padding: 15px;
border-radius: 6px;
`

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  opacity: 0.85;
`

const Image = styled.img`
width: 50%;
opacity: 0.85;
`

const WineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid black 2px;
  padding: 5px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
  border-radius: 6px;
`

const Link = styled.a`
margin: 1rem;
text-decoration: none;
color: black;
`

const GoBackLink = styled.a`
border: 2px black solid;
border-radius: 6px;
text-transform: uppercase;
text-decoration: none;
color: black;
padding: 5px;
margin: 10px;
`

const MostExpensive = () => {
  const [wines, setWines] = useState([])

  useEffect(() => {
    fetch(PRICE_URL)
      .then((res) => res.json())
      .then((json) => {
        setWines(json.response)
      })
  }, [])


  return (
    <>
    <ContentWrapper>
    <Image src={header} alt='Header' />
    <GoBackLink href="/" exact="true">
            Go Back
          </GoBackLink>
      <GridContainer>
        {wines.map((wine) => (
          <WineContainer key={wine.title}>
            <Link to={`/wines/${wine.title}`}>
                <h3>{wine.title}</h3>
                <h3>{wine.price} $</h3>
                <h5>{wine.points} points</h5>
                <h5>{wine.province}, {wine.country}</h5>
            </Link>
          </WineContainer>
        ))}
        </GridContainer>
      </ContentWrapper>
    </>
  )
}

export default MostExpensive