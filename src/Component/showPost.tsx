import React, { useState } from "react";
import { IPost } from "../Interfaces/post";
import { useShowPostQuery } from "../Services/myApi";



export const ShowPost = () => {
  const { data, error, isLoading, isSuccess, isError } = useShowPostQuery();
 
  return (
    <>
      <div className="App">
        <h2>Show Post</h2>
        {isLoading && "Loading..."}
        {isError && "Something went Wrong"}
        {isSuccess && (
          <div className="table">
            <table id="customers">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data?.map((item: IPost, index: any) => {
                    return (
                      <tr key={index}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.city}</td>
                        <td>
                          <button className="btn-edit">Edit</button>
                          <button className="btn-del">Delete</button>
                          <button className="btn-view">View single Post</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
