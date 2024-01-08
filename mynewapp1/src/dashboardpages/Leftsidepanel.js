import React from 'react'
import {NavLink } from "react-router-dom";
import User from './User';

const Leftsidepanel = () => {
  return (
    <>
      <aside className="leftsidepanel">
         <div className="row">
        <div className="col-12">
             <User/>
            <div className="dashbordNabar pt-md-5 pt-2 ">
               <ul>
                 <li>
                  <NavLink to="/dashboard"><span><i className="bi bi-house-door"></i></span>dashboard</NavLink>
                 </li>
                  <li><NavLink to="/buttons"><span><i className="bi bi-film"></i></span>Button</NavLink></li>

                  <li><NavLink to="/typography"><span><i className="bi bi-calendar2-event"></i></span>Typography</NavLink></li>

                  <li><NavLink to="/tables"><span><i className="bi bi-check2-square"></i></span>Tables</NavLink></li>

                  <li><NavLink to="/alerts"><span><i className="bi bi-file-earmark-text"></i></span>Alerts</NavLink></li>

                  <li><NavLink to="/cardscomp"><span><i className="bi bi-file-earmark-text"></i></span>Cards</NavLink></li>

               </ul>
               <ul>
                 <li><a href="#"><span><i className="bi bi-box-arrow-left"></i></span>logout</a></li>
               </ul>
           </div>
         </div>
       </div>
     </aside>
    </>
  )
}

export default Leftsidepanel;