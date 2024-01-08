import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';


const Header = (props) => {
    const curentDate = new Date().toLocaleDateString();
  return (
    <>
            <header className='header'>
                  <div className="row">
                    <div className="col-6 col-md-4">
                        <div className="input-group mb-3">
                         <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></span>
                      </div>
                    </div>
                    <div className="col-6 col-md-8">
                      <div className="calender">
                        <span><i className="bi bi-calendar2"></i></span>
                        <span>{curentDate}</span>
                      </div>
                    </div>
                  </div>
                </header>
                <section className="welcome-section">
                  <div className="row align-items-center">
                    <div className="col-4 col-md-4 py-3 py-md-0">
                       <h2 className='py-2 py-md-3'>Welcome {props.title}</h2>
                    </div>
                    <div className="col-8 col-md-8 text-end">
                    <Button variant="outlined"> <AddIcon /></Button>
                   </div>
                  </div>
              </section>
    </>
  )
}

export default Header;