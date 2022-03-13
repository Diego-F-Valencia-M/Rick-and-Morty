import React from 'react'


function ResidentInfo({ data }) {
  
  return (
    <div className="resident-info blue-700">
      <img className="resident-img" src={data?.data.image} alt="" />
      <h2>{data?.data.name}</h2>
      <span className='description'>Raza</span>
      <p>{data?.data.species}</p>
      <span className='description'>Origen</span>
      <p>{data?.data.origin?.name}</p>
      <span className='description'>Aparicion</span>
      <p>{data?.data.episode?.length}</p>
    </div>
  )
}

export default ResidentInfo