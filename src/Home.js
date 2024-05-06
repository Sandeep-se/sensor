import React from 'react'
import './Home.css'
import Product from './Product'
import Anemometer from './picture/Anemometer.png'
import Humidity from './picture/Humidity.png'
import Light from './picture/Light .png'
import Soil_Moisture from './picture/Soil Moisture.png'
import Temperature from './picture/Temperature.png'
import UV_Index from './picture/UV_Index.png'
import Background from './picture/Background.png'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
         <img className='home_image' src={Background}
          alt='homepage'/>
      </div>
      <div className='home_row'>
        <Product 
        id='123'
        title={"Anemometer" }
        price={100} 
        rating={4}
        image={Anemometer}
        />
        <Product
        id='345'
        title={"Humidity"} 
        price={200} 
        rating={4}
        image={Humidity}
      />
      </div>

      <div className='home_row'>
        <Product
        id='567'
        title={"Light" }
        price={400} 
        rating={5}
        image={Light}
        />
      </div>

      <div className='home_row'>
        <Product
        id='789'
        title={"Soil Moisture"} 
        price={500} 
        rating={4}
        image={Soil_Moisture}
        />
        <Product 
        id='012'
        title={"Temperature"} 
        price={300} 
        rating={4}
        image={Temperature}
        />
        <Product
         id='345'
        title={"UV Index"} 
        price={500} 
        rating={4}
        image={UV_Index}
        />

      </div>

    </div>
  )
}

export default Home
