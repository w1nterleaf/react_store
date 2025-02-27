import React, { FC } from 'react'
import ReactPaginate from "react-paginate"
import s from './Pagination.module.scss'

interface IProps  {
    limit: number;
    currentPage:number;
    totalCount: number
    changePage: (num: number) => void 
}

const Pagination:FC<IProps> = ({limit,currentPage,totalCount,changePage}) => {
    
    const pageCount = Math.ceil(totalCount / limit)
    
  return (
    <ReactPaginate
        className={s.paginate}
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        forcePage={currentPage - 1}
        onPageChange={(event) => changePage(event.selected + 1)} 
        pageRangeDisplayed={3}
        pageCount={pageCount}
    />
  )
}

export default Pagination