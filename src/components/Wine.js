import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black'
}

const FlexContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  opacity: 0.85;
`

const WineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid black 2px;
  padding: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
  border-radius: 6px;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
`
const PointsContainer = styled.div`
  display: flex;
  flex-direction: column;
`


const Wine = ({ wines }) => {

 
    return (
        <FlexContainer>
          {wines.map((wine) => {
            return (
              <Link to={`/wines/titles/${wine.title}`} style={linkStyle}>
                <WineContainer>
                  <TitleContainer>
                    <h1>{wine.title}</h1>
                    <h3>{wine.province}, {wine.country}</h3>
                    {wine.taster_name && <h4>- {wine.taster_name}</h4>}
                  </TitleContainer>
                  <PointsContainer>
                    <h1>{wine.points} points</h1>
                    {wine.price && <h1>$ {wine.price}</h1>}
                  </PointsContainer>
                </WineContainer>
              </Link>
          )})}
      </FlexContainer>
    )
}

export default Wine