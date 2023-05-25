import React from 'react'
import style from "./index.module.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Home from  "../../pages/Home";
import Add from  "../../pages/Add";
const index = () => {
  return (
    <> 
    <section className={style.section}>
    <header className={style.header}>
        <div style={{width:"70%",margin:"0 auto"}}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
            <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png.webp" alt="sdsds" />
        </Grid>
        <Grid item xs={6}>
            <nav>
                <ul style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px"}}>
                   <li className={style.li}><Link  to="/"  element={<Home />} className={style.a}>Home</Link></li>
                   <li className={style.li}><Link  to="/add"  element={<Add />} className={style.a}>Add</Link></li>
                   <li className={style.li}><a href='#' className={style.a}>Services</a></li>
                   <li className={style.li}><a href='#' className={style.a}>Services</a></li>
                   <li className={style.li}><a href='#' className={style.a}>Services</a></li>
                   <li className={style.li}><a href='#' className={style.a}>Services</a></li>
                   <li className={style.li}><a href='#' className={style.a}>Services</a></li>
                   <li className={style.li}><a href='#' className={style.a}>Services</a></li>
                </ul>
            </nav>
        </Grid>
      </Grid>
    </Box>
        </div>
        <div style={{width:"70%",margin:"0 auto"}} >
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <h1 className={style.h1}>HELLO WE'RE BIZPRO</h1>
                <h6 className={style.h6}>Sub Head.MOTTO OUR MISSION</h6>
                <a href="#" className={style.a2}>See Our projects</a>
            </div>
        </div>
    </header>
    </section>
    </>
  )
}

export default index