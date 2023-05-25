import React from 'react'
import style from "./index.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const index = () => {
  return (
   <>
   <section className={style.section}>
        <h2 className={style.h2} >OUR LATEST BLOG</h2>
        <p className={style.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br></br> standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        <div style={{width:"70%",margin:"0 auto",marginBottom:"60px"}}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <div className={style.card}>
            <div className={style.img}>
                <img src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg.webp"  style={{maxWidth:"100%",height:"auto",filter:"grayscale(80%)"}}/>
                <div style={{overflow:"hidden"}}>
                    <h6>
                        <a href="#" className={style.a}>Playback: Akufo-Addo speaks to business community</a>
                    </h6>
                    <a href="#" className={style.a2}>Posted by <span class="p-color" className={style.span}>admin</span> at 04 Feb, 2017</a>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... <a href="#" >Read More</a></p>
                 </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <div className={style.card}>
            <div className={style.img}>
                <img src="https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg.webp"  style={{maxWidth:"100%",height:"auto"}}/>
                <div style={{overflow:"hidden"}}>
                    <h6>
                        <a href="#" className={style.a}>Playback: Akufo-Addo speaks to business community</a>
                    </h6>
                    <a href="#" className={style.a2}>Posted by <span class="p-color" className={style.span}>admin</span> at 04 Feb, 2017</a>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... <a href="#" >Read More</a></p>
                 </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}> 
        <div className={style.card}>
            <div className={style.img}>
                <img src="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg.webp"  style={{maxWidth:"100%",height:"auto"}}/>
                <div style={{overflow:"hidden"}}>
                    <h6>
                        <a href="#" className={style.a}>Playback: Akufo-Addo speaks to business community</a>
                    </h6>
                    <a href="#" className={style.a2}>Posted by <span class="p-color" className={style.span}>admin</span> at 04 Feb, 2017</a>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... <a href="#" >Read More</a></p>
                 </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
        </div>
   </section>
   </>
  )
}

export default index