import React from 'react';
import Leftsidepanel from '../dashboardpages/Leftsidepanel';
import Header from '../dashboardpages/Header';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import HeaderData from '../data/HeaderData';

const Buttons = () => {
  return (
    <>
 <section className="dashbord">
      <div className="container-fluid">
            <div className="row">
            <div className="col-12 col-md-2">
               <Leftsidepanel/>
            </div>
            <div className="col-12 col-md-10 bgcolor p-4">
           <Header title={HeaderData[1].title} />
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
                            <Stack spacing={2} direction="row">
                            <Button variant="text">Text</Button>
                            <Button variant="contained">Contained</Button>
                            <Button variant="outlined">Outlined</Button>
                            <Button disabled>Disabled</Button>
                            <Button color="secondary">Secondary</Button>
                            <Button variant="contained" color="success">
                            Success
                            </Button>
                            <Button variant="outlined" color="error">
                            Error
                            </Button>
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

export default Buttons;