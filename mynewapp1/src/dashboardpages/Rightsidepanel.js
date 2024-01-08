import React from 'react';
import Header from './Header';
import BodyContent from './BodyContent';
import HeaderData from '../data/HeaderData';
const Rightsidepanel = () => {
  return (
    <>
<main className="rightsidepanel">
          <div className="row">
             <div className="col-12">
             <Header title={HeaderData[0].title} />
              <section className='card-section'>
                 <div className="row">
                 </div>
                 <BodyContent/>
                 </section>
            
             </div>
          </div>
        </main>
    </>
  )
}

export default Rightsidepanel;