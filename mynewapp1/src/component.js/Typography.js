import React from 'react';
import Leftsidepanel from '../dashboardpages/Leftsidepanel';
import Header from '../dashboardpages/Header';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import HeaderData from '../data/HeaderData';

const Typography = () => {
  return (
    <>
 <section className="dashbord">
      <div className="container-fluid">
            <div className="row">
            <div className="col-12 col-md-2">
               <Leftsidepanel/>
            </div>
            <div className="col-12 col-md-10 bgcolor p-4">
            <Header title={HeaderData[2].title} />
               <div className="row pt-4">
                    <div className="col-12">

                        <Box
                            sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            p:5,
                            width: 700,
                            height: 350,
                            },
                            }}
                            >
                            <Paper elevation={3}>
                              <h1>Heading 1...</h1>
                              <h2>Heading 2...</h2>
                              <h3>Heading 3...</h3>
                              <h4>Heading 4...</h4>
                              <h5>Heading 5...</h5>
                              <h6>Heading 6...</h6>
                            </Paper>
                        </Box>

                          
                    </div>
                    
               </div>
            </div>
            </div>
      </div>
      </section>
    </>
  )
}

export default Typography;