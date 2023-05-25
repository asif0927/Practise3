import React, { useEffect, useState } from 'react'
import style from "./index.module.css";
import { getAllServices } from '../../api/requests';
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const index = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{
     getAllServices().then(res=>{
        setData(res);
      })
    },[])
  return (
   <>
   <section className={style.section}>
        <h2 className={style.h2}>ABOUT OUR BIZPRO</h2>
        <p className={style.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        <div style={{marginBottom:"40px",display:""}}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
         {
            data&&data.map((service)=>{
                return <Card>
                    <img src={service.iconUrl} />
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                </Card>
            })
         }
           </Grid>
      </Grid>
    </Box>
    </div>


        <div style={{marginTop:"50px"}}>
        </div>
   </section>
   </>
  )
}

export default index