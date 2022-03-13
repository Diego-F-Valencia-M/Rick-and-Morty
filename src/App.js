
import { useEffect, useState } from 'react';
import './App.css';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';
import SearchBox from './components/SearchBox'
import axios from 'axios';

function App() {
  //obtención de los datos de ubicación
  const [data, setData] = useState({});
  
  //búsqueda de cada personaje en su ubicación respectiva
  const [dataIndResident, setDataIndResident] = useState({})

  //identificación aleatoria cuando se carga el navegador
  const [id, setId] = useState(Math.floor(Math.random()*126))
  
  //obtenemos la ubicación, procedemos a buscar toda la información de cada   resident
  const getResidents = (data) => {
    const promiseArray = data?.residents.map((url) => axios.get(url));
    Promise.all(promiseArray)
    .then((data) => {
      setDataIndResident(data)
    })
  }

  const handleForm = (e, formData) => {
    e.preventDefault()
    if (formData) {
      setId(formData)
      setData(formData[0])
      getResidents(formData[0])
    } else {
      setData(null)
      setDataIndResident(null)
    }
  }

  useEffect(() => {
    if (typeof id === 'number') {
      axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(data => {
          setData(data.data)
          getResidents(data.data)
        })
    }
  }, [id])

  return (
    <div className="App">
      <img className="hero" src="./frame.png" alt="" />
      <SearchBox click={handleForm}/>
      <LocationInfo data={data}/>
      <ResidentsList data={dataIndResident}/>
    </div>
  );
}

export default App;
