import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import './Pagination.css'
import PageLink from '../PageLink/PageLink'


const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

const range = (from, to, step = 1) => {
    let i = from
    const range = []

    while(i <= to){
        range.push(i)
        i += step
    }

    return range
}

export default class Pagination extends Component{
    static contextType = UserContext

    fetchPageNumbers = () => {
        const totalPages = this.context.results.pageCount
        const currentPage = this.context.currentPage
        const pageNeighbors = this.context.pageNeighbors

        /* totalNumbers shows the numbers in navbar. totalBlocks accounts for << and >> buttons */

        const totalNumbers = (pageNeighbors * 2) + 3
        const totalBlocks = totalNumbers + 2

        if(totalPages > totalBlocks){
            const startPage = Math.max(2, currentPage - pageNeighbors)
            const endPage = Math.min(totalPages -1, currentPage + pageNeighbors)
            let pages = range(startPage, endPage)
        

        /**
         * hasLeftSpill: has hidden pages to left
         * hasRightSpill: has hidden pages to right
         * spillOffset: number of hidden pages to either left or right
         */

            const hasLeftSpill = startPage > 2
            const hasRightSpill = (totalPages - endPage) > 1
            const spillOffset = totalNumbers - (pages.length + 1)

            switch(true) {
                
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage -1)
                    pages = [LEFT_PAGE, ...extraPages, ...pages]
                    break;
                }

                case(!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset)
                    pages = [...pages, ...extraPages, RIGHT_PAGE]
                    break
                }

                case(hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
                    break
                }
            }

            return [1, ...pages, totalPages]
        }

        return range(1, totalPages)
    }
    render(){

        if(this.context.results.unions.length === 0 || this.context.results.pageCount === 1) {
            return null
        }
        
        const pages = this.fetchPageNumbers()

        return(
            <div className='unions-pagination'>
                <nav className='page-nav'>
                    <ul className='pagination'>
                        {pages.map((page, i) => <PageLink key={i} page={page} left={LEFT_PAGE} right={RIGHT_PAGE}/>)}
                    </ul>
                </nav>
            </div>
        )
    }   
}