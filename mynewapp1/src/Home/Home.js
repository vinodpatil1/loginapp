import React from 'react'
import Navbar from '../Navbar';


const Home = () => {
  return (
      <>
         <Navbar/>
         <div className="hero">
           <div className="container-fluid">
           <div className="row">
            <div className="col-5 py-5 m-auto">
               <figcaption className='p-5'>
               <h1 className='text-white'>Welcome to Home Page </h1>
               </figcaption>
            </div>
           </div>
         </div>
         </div>
      </>
  )
}

export default Home;