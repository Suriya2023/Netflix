import React, { useState, useEffect } from 'react';
import './App.css';
import Navabr from './Component/Navabr';
import SerachBar from './Component/SerachBar';
import Movies from './Component/Movies';
import Slider from './Component/Slider';
import { items } from './Data/400Data';
import Contact from './Component/Singin';
import NetflixUIClone from './Component/NetflixUIClone';
import MoviesVedios from './Component/MoviesVedios';
import FlintstonesUI from './Component/FlintstonesUI';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StreamingPlatform from './Component/StreamingPlatform';
import Footer from './Component/Footer'
import StreamingPlatform1 from './Component/StreamingPlatform1.';

function App() {
  const [Data, SetData] = useState([...items]);
  const [Movies, setMovies] = useState([]);

  return (
    <>
      <div className='mxwidth'>
        <BrowserRouter>
          <Navabr setData={SetData} />

          <Routes>
            <Route path="/" element={
              <>
                <NetflixUIClone setMovies={setMovies} Movies={Movies} items={Data} />
                <Slider />
              </>
            } />

            <Route path='/PageDetails/:id' element={<FlintstonesUI />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path="/Search" element={<SerachBar item={Data} />} />
            {/* <Route path='/StreamingPlatform/:id' element={<StreamingPlatform />} /> */}
            <Route path='/StreamingPlatform/:id' element={<StreamingPlatform1 />} />


          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
