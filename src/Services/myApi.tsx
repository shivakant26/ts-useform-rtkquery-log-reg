import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { model } from './model';

// Define a service using a base URL and expected endpoints
export const crudApi = createApi({
  reducerPath: 'crudApi',
  baseQuery: fetchBaseQuery({
     baseUrl: 'https://secondmorelive.herokuapp.com/',
 }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<model ,Partial<model>>({
      query : (data) => {
      console.log(data);
        return({
          url:'register',
          method:'POST',
          body : data,
          headers : {
            "Content-type" : "application/json"
          }
        })
      }
    }), 
    LoginUser: builder.mutation<model ,Partial<model>>({
      query : (data) => {
      console.log(data);
        return({
          url:'login',
          method:'POST',
          body : data,
          headers : {
            "Content-type" : "application/json"
          }
        })
      }
    }), 
  }),
})

export const { useRegisterUserMutation , useLoginUserMutation } = crudApi;
