import { BASE_URL } from "./baseurl";
import axios from "axios";

export const getAllServices = async(title)=>{
    let Services;
    let URL;
    if (!title) {
        URL = BASE_URL+'/services';
    }
    else{
        URL = BASE_URL+`/services/?title=${title}`
    }
    await axios.get(URL)
    .then(res =>{ 
       Services = res.data;
    })

    return Services
}
//getbyid

//post


//delete

