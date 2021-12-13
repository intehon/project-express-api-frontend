 
import React, { useState, useEffect } from 'react'
import { WINE_URL } from 'utils/urls'
import styled from 'styled-components'
import Wine from './Wine'
import header from 'images/header-img.png'

const WineList = () => {
  const [wines, setWines] = useState([])
  const [page, setPage] = useState(1)
  const [postPerPage] = useState(5)

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

  const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    background: #FEF4E8;
    opacity: 0.85;
    align-items: center;
  `

  const Nav = styled.div`
    padding: 20px;
  `

  const Image = styled.img`
    width: 100%;
    opacity: 0.85;
  `


  return (
    <>
      <ContentWrapper>
      <Image src={header} alt='Header' />
        <Nav>
          <button
          type="button"
          onClick={previousPage} 
          disabled={startIndex <= 0}>Previous Page</button>
          <button
          onClick={nextPage}
          disabled={endIndex > wines.length}
          >Next Page</button>
        </Nav>
        {/* <Pagination postPerPage={postPerPage} postPerPage={postPerPage} totalPosts={wines.length} paginate={paginate} endIndex={endIndex} startIndex={startIndex} currentPage={currentPage}/> */}
        <Wine wines={currentPage} />
      </ContentWrapper>
    </>
  )
}

export default WineList