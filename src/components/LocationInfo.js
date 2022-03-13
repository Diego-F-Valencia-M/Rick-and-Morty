import React from 'react'

const LocationInfo = ({ data }) => {
  
  return (
    <div className="wrapper blue-700">
      <ul className="location-info">
        <li> <span>Name:</span>  {data ? data.name : 'Not found'}</li>
        <li><span>Tipo:</span> {data ? data.type : 'Not found'}</li>
        <li><span>Dimension:</span> {data ? data.dimension : 'Not found'}</li>
        <li><span>Poblacion:</span> {data ? data.residents?.length : 'Not found'}</li>
      </ul>
    </div>
  )
}

export default LocationInfo