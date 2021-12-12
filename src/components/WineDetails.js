import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { TITLE_URL } from 'utils/urls'
import styled from 'styled-components'

const WineDetails = () => {
  const [details, setDetails] = useState([])

  const { title } = useParams()

  useEffect(() => {
    fetch(TITLE_URL(title))
      .then((res) => res.json())
      .then((json) => setDetails(json.response))
  }, [title])

  const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

  const ParentContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 15px;
  width: 50vw;
`

const Nav = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  text-decoration: none;
`

const WineContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    <ContentWrapper>
      <ParentContainer>
        <Nav>
          <Link to="/" exact="true">
            Go Back
          </Link>
        </Nav>

        <WineContainer>
          {details.map((wine) => (
          <div className='reviewSection'>
              <h1>{wine.title}</h1>
              <p>{wine.description}</p>
              <p>{wine.taster_name}</p>
              <p>{wine.taster_twitter_handle}</p>
          </div>
          ))}
          {details.map((wine) => (
          <div className='pointsSection'>
              <h2>{wine.points}</h2>
              <p>{wine.price}</p>
              <p>{wine.variety}</p>
              <p>{wine.province}, {wine.country}</p>
              <p>{wine.winery}</p>
          </div>
          ))}
        </WineContainer>
    </ParentContainer>
  </ContentWrapper>
  )
}

export default WineDetails


// { title, description, taster_name, taster_twitter_handle, points, price, variety, province, country, winery }