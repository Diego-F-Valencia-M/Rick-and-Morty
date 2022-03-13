
import React, { useState } from 'react'
import Pagination from './Pagination'
import ResidentInfo from './ResidentInfo'

const ResidentsList = ({ data }) => {
  
  const [pagIndex, setPagIndex ] = useState(0)
  const cardsPerPage = 6;
  
  //number of buttons
  const numberBtns = Math.ceil(data?.length / cardsPerPage)

  //new array with pagination
  const arrayPagination = [];
  
  for (let i = 1; i <= numberBtns; i++){
      arrayPagination.push(data.slice(i *cardsPerPage-cardsPerPage, i * cardsPerPage))
  }
  
  const handleClick = (num) => {
    setPagIndex(num-1)
  }

  return (
    <div className="wrapper">
      
      <div className="d-flex">
        {
          data ?
          arrayPagination[pagIndex]?.map((el) => (
            <ResidentInfo key={Math.random() * 1000} data={el} />
          ))
          :
          <h1>Not found :( ... Please try again</h1>
        }
      </div>
      <div className="Pagination-residentlist">
        {arrayPagination?.map((el, index) => (
            <Pagination key={index} number={index + 1} click={handleClick}/>
          ))
        }
      </div>
    </div>
  )
}

export default ResidentsList