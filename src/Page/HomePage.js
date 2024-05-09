import React from 'react';
import { useSelector } from 'react-redux';
import Cards from '../Components/Cards.js';
import Filters from '../Components/Filters.js';
const HomePage = () => {
  return (
    <>
    <div className='container'>
        <div className='main-container'>
           <Filters/>
           <Cards/>
        </div>
    </div>
    </>
  )
}

export default HomePage