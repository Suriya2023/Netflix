import React from 'react'
// import Slider from './Slider'
import NetflixUIClone from './NetflixUIClone'
import { items } from '../Data/400Data'


function HomePage() {
    const [Data, SetData] = useState([...items])
    const [cart, setCart] = useState([]);


    return (
        <div>
            <NetflixUIClone setCart={setCart} cart={cart} items={Data} />
             
        </div>
    )
}

export default HomePage
