import React from 'react';
import Leftsidepanel from '../dashboardpages/Leftsidepanel';
import Header from '../dashboardpages/Header';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import HeaderData from '../data/HeaderData';

const Alerts = () => {
  return (
    <>
 <section className="dashbord">
      <div className="container-fluid">
            <div className="row">
            <div className="col-12 col-md-2">
               <Leftsidepanel/>
            </div>
            <div className="col-12 col-md-10 bgcolor p-4">
            <Header title={HeaderData[4].title} />
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
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                <Alert severity="error">This is an error alert — check it out!</Alert>
                                <Alert severity="warning">This is a warning alert — check it out!</Alert>
                                <Alert severity="info">This is an info alert — check it out!</Alert>
                                <Alert severity="success">This is a success alert — check it out!</Alert>
                                </Stack>
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

export default Alerts;