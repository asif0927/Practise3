import React from 'react'
import style from "./index.module.css";
import Meet from "../../sections/Meet";
import Blog from "../../sections/Blog";
import About from "../../sections/About";
import {Helmet} from "react-helmet";

const index = () => {
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <About/>
    <Meet/>
    <Blog/>
    </>
  )
}

export default index