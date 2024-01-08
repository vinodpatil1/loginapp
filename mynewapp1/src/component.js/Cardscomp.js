import React from 'react';
import Leftsidepanel from '../dashboardpages/Leftsidepanel';
import Header from '../dashboardpages/Header';
import HeaderData from '../data/HeaderData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TeamsData from "../data/TeamsData";

const Cardscomp = () => {
  return (
    <>
 <section className="dashbord">
      <div className="container-fluid">
            <div className="row">
            <div className="col-12 col-md-2">
               <Leftsidepanel/>
            </div>
            <div className="col-12 col-md-10 bgcolor p-4">
            <Header title={HeaderData[5].title} />
               <div className="row pt-4">
                    
                      {TeamsData.map((val)=>{
                         return(
                            <>
                            <div className="col-4 mb-4">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                src={val.imgscr}
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {val.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {val.content}
                                </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                            </div>
                            </>
                         )
                      })};
                     
               </div>
            </div>
            </div>
      </div>
      </section>
    </>
  )
}

export default Cardscomp;