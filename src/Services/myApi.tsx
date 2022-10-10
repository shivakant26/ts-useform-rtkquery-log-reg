import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IModel } from "../Interfaces/model";
import { IPost, IPostArray } from "../Interfaces/post";

// here call .env file
const apiBaseUrl = process.env.REACT_APP_API_KEY;

const Token : string | null = JSON.parse(localStorage.getItem("Token")!);
// Define a service using a base URL and expected endpoints
export const crudApi = createApi({
  reducerPath: "crudApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
    prepareHeaders: (headers) => {
      headers.set("Content-type", "application/json");
      headers.set("Authorization", `Bearer ${Token}`);
      return headers
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IModel, Partial<IModel>>({
      query: (data) => {
        console.log(data);
        return {
          url: "register",
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    LoginUser: builder.mutation<IModel, Partial<IModel>>({
      query: (data) => {
        console.log(data);
        return {
          url: "login",
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        };
      },
    }),
    showPost: builder.query<IPostArray, void>({
      query: () => {
        return {
          url: "get",
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        };
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useShowPostQuery } = crudApi;
// export const { useShowPostQuery } = crudApi;
