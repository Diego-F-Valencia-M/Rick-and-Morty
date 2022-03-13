import React from 'react'

const Pagination = ({number, click}) => {
  
  return (
    <button className="pagination-button" onClick={()=>click(number)}>{number}</button>
  )
}

export default Pagination