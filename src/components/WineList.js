 
import React, { useState, useEffect } from 'react'
import { WINE_URL } from 'utils/urls'
import styled from 'styled-components'
import Wine from './Wine'

const WineList = () => {
  const [wines, setWines] = useState([])
  const [page, setPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(20)

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
  const paginate = pageNumber => setPage(pageNumber)


  const nextPage = () => {
    setPage(page + 1)
  }
  const previousPage = () => {
    setPage(page - 1)
  }

  const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `


  return (
    <>
      <ContentWrapper>
        <div>
          <h1>Wines</h1>
        </div>

        <div>
          <button
          type="button"
          onClick={previousPage} 
          disabled={startIndex <= 0}>Previous Page</button>
          <button
          onClick={nextPage}
          disabled={endIndex > wines.length}
          >Next Page</button>
        </div>
        {/* <Pagination postPerPage={postPerPage} postPerPage={postPerPage} totalPosts={wines.length} paginate={paginate} endIndex={endIndex} startIndex={startIndex} currentPage={currentPage}/> */}
        <Wine wines={currentPage} />
      </ContentWrapper>
    </>
  )
}

export default WineList