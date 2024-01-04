import { data } from './data';
import { useState } from 'react';
import './App.css';
import Carousel from './Carousel';

function App() {

  const [cities, setCities] = useState (data);

  const removeCity = (id) => {
  let newCities = cities.filter (city => city.id !==id);
  setCities (newCities)
}


  return (
    <div>
      <div className='container'>
        <h1>{cities.length} must-see cities</h1>
      </div>

      {cities.map ((city => {
        const {id, cityName, description, image, source, images} = city;

        return (
          <div key={id}>
            <div className='container'>
                <h2>{id} - {cityName}</h2>
            </div>

            <div className='container'>
                <img src ={image} width="150px" alt="cities" />
            </div>

            <div className='container'>
                <p>{description}</p>
            </div>
            
            <div className='container'>
                <Carousel images={images} />
            </div>

            <div className='container'>
                <p>{source}</p>
            </div>

            <div className='container'>
                <button className='btn' onClick={()=>removeCity (id)}>Remove</button>
            </div>
          </div>
        )

      }))}

      <div className='container'>
      <button className='btnTwo' onClick={()=>setCities([])}>Delete all</button>
      </div>

    </div>
  );
}

export default App;
