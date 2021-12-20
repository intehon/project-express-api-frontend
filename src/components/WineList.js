 
import React, { useState, useEffect } from 'react'
import { WINE_URL } from 'utils/urls'
import styled from 'styled-components'
import Wine from './Wine'
import header from 'images/header-img.png'

 
const Link = styled.a`
margin: 1rem;
text-decoration: none;
text-transform: uppercase;
letter-spacing: 1px;
color: black;
`

const ContentWrapper = styled.section`
display: flex;
flex-direction: column;
background: #FEF4E8;
opacity: 0.90;
align-items: center;
padding-bottom: 15px;
border-radius: 6px;
`

const NavContainer = styled.div`
padding: 20px; 
`

const Nav = styled.nav`
display: flex;
`
const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`

const Image = styled.img`
width: 50%;
opacity: 0.85;
`

const WineList = () => {
  const [wines, setWines] = useState([])
  const [page, setPage] = useState(1)
  const [postPerPage] = useState(10)

  useEffect(() => {
    fetch(WINE_URL)
      .then((res) => res.json())
      .then((json) => {
        setWines(json.results)
      })
  }, [])

  // get current posts

  const endIndex = page * postPerPage
  const startIndex = endIndex - postPerPage
  const currentPage = wines.slice(startIndex, endIndex)

  // change page
  // const paginate = pageNumber => setPage(pageNumber)


  const nextPage = () => {
    setPage(page + 1)
  }
  const previousPage = () => {
    setPage(page - 1)
  }


  return (
    <>
      <ContentWrapper>
      <Image src={header} alt='Header' />
        <NavContainer>
          <Nav>
              <Link href={`/wines/top-rated`}>Top Rated Wines</Link>
              <p class="navigation">|</p>
              <Link href={`/wines/most-expensive`}>Most Expensive Wines</Link>
              <p class="navigation">|</p>
              <Link class="search-link" href="#">Search</Link>
          </Nav>
          <ButtonContainer>
          <button
          type="button"
          onClick={previousPage} 
          disabled={startIndex <= 0}>Previous Page</button>
          <button
          onClick={nextPage}
          disabled={endIndex > wines.length}
          >Next Page</button>
          </ButtonContainer>
        </NavContainer>
        {/* <Pagination postPerPage={postPerPage} postPerPage={postPerPage} totalPosts={wines.length} paginate={paginate} endIndex={endIndex} startIndex={startIndex} currentPage={currentPage}/> */}
        <Wine wines={currentPage} />
      </ContentWrapper>
    </>
  )
}

export default WineList