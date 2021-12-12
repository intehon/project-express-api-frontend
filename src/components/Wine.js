import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wine = ({ wines }) => {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
      }
    
      const FlexContainer = styled.section`
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
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