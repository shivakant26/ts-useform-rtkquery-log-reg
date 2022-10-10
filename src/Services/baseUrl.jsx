import axios from "axios";

export const http = axios.create({
    baseURL:"https://secondmorelive.herokuapp.com",
    headers:{
        "Content-Type":"application/json"
    }
})