import React from 'react'
import style from "./index.module.css";
import {Helmet} from "react-helmet";
const index = () => {
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div>add</div>
    </>
  )
}

export default index