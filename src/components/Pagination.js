import React from 'react'
import styled from 'styled-components'
import WineList from './WineList'
import ReactPaginate from 'react-paginate'

export const Pagination = ({ totalPosts, paginate, pageNumbers, postPerPage}) => {
    // let pageNumbers = [], i = 1

    // const dots = () => {
    //     return <div className="dots">...</div>
    // }

    // for(let i = 1; i <= 3; i++) {
    //     pageNumbers.push(i)
    // } 
    //   pageNumbers.push(dots)

    //   for(let i = endIndex - 2; i <= endIndex ; i++) {
    //       pageNumbers.push(i)
    //   }

    const Navigation = styled.nav`
    `
    const PageList = styled.ul`
        display: flex;
    `

    return (
        <Navigation>
            <PageList>
                {pageNumbers && pageNumbers.map(number => (
                    <div key={number} className='page-item'>
                        <button onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </button>
                    </div>
                ))}
            </PageList>
        </Navigation>
    )
}
