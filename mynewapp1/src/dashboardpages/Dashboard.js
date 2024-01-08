import React from 'react'
import Leftsidepanel from '../dashboardpages/Leftsidepanel';
import Rightsidepanel from './Rightsidepanel';


const Dashboard = () => {
  return (
      <>
        <section className="dashbord">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-md-2">
                    {<Leftsidepanel/>}
               </div>
                <div className="col-12 col-md-10 bgcolor p-4">
                    <Rightsidepanel/>
                </div>
                </div>
            </div>
          </section>
      </>
  )
}

export default Dashboard