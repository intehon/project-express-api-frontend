import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { TITLE_URL } from 'utils/urls'
import styled from 'styled-components'
import header from 'images/header-img.png'

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
  background: #FEF4E8;
  opacity: 0.85;
  padding: 15px;
  width: 50vw;
`
const Image = styled.img`
    opacity: 0.85;
  `

const Nav = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`

const Link = styled.a`
/* margin: 1rem; */
text-decoration: none;
text-transform: uppercase;
letter-spacing: 1px;
color: black;
`

const WineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border: solid black 1px;
  padding: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
  border-radius: 6px;
`
  const TextContainer = styled.div`
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
      <Image src={header} alt='Header' />
        <Nav>
          <Link href="/" exact="true">
            Go Back
          </Link>
        </Nav>

        <WineContainer>
          {details.map((wine) => (
          <TextContainer className='reviewSection'>
              <h1>{wine.title}</h1>
              <p>{wine.description}</p>
              <p>{wine.taster_name}</p>
              {wine.taster_twitter_handle && <Link href={`https://twitter.com/${wine.taster_twitter_handle}`} target='_blank' rel="noopener noreferrer">{wine.taster_twitter_handle}</Link>}
          </TextContainer>
          ))}
          {details.map((wine) => (
          <PointsContainer className='pointsSection'>
              <h2>{wine.points} points</h2>
              {wine.price && <p>$ {wine.price}</p>}
              <p>{wine.variety}</p>
              <p>{wine.province}, {wine.country}</p>
          </PointsContainer>
          ))}
        </WineContainer>
    </ParentContainer>
  </ContentWrapper>
  )
}

export default WineDetails


// { title, description, taster_name, taster_twitter_handle, points, price, variety, province, country, winery }