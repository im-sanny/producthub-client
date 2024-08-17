import React from 'react'
import Banner from '../components/Banner';
import Products from '../components/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Products></Products>
    </div>
  )
}

export default Home;