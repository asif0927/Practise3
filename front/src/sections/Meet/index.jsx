import React from 'react'
import style from "./index.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const index = () => {
  return (
    <>
    <section className={style.section}>
        <h1 className={style.h1}>MEET OUR TEAM</h1>
        <p className={style.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br></br> standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <div className={style.card}>
            <div className={style.img}>
                <img src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg.webp"  style={{maxWidth:"100%",height:"auto"}}/>
                <div className={style.member}>
                    <h6 className={style.h6}>Gonzalez Gina</h6>
                    <p className={style.p2}>Web Developer</p>
                 </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <div className={style.card}>
            <div className={style.img}>
                <img src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg.webp"  style={{maxWidth:"100%",height:"auto"}}/>
                <div className={style.member}>
                    <h6 className={style.h6}>Gonzalez Gina</h6>
                    <p className={style.p2}>Web Developer</p>
                 </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}> 
        <div className={style.card}>
            <div className={style.img}>
                <img src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg.webp"  style={{maxWidth:"100%",height:"auto"}}/>
                <div className={style.member}>
                    <h6 className={style.h6}>Gonzalez Gina</h6>
                    <p className={style.p2}>Web Developer</p>
                 </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
    </section>
    </>
  )
}

export default index