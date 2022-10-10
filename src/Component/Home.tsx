import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { model } from "../Services/model";
import { useLoginUserMutation } from "../Services/myApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  const [ loginUser , mutationResult] = useLoginUserMutation();
  console.log(123456,mutationResult?.status);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isSubmitSuccessful }
  } = useForm<model>();
  const onSubmit = (data:model) => {
    loginUser(data)
    reset({
        email: "",
        password: ""
      });
  };

  useEffect(()=>{
    if(mutationResult && mutationResult.status === 'fulfilled'){
        toast.success("User Logged in Successfully",
           {position: toast.POSITION.TOP_RIGHT}) 
    }
  },[mutationResult])

  return (
    <>
      <div className="form-wr">
        <div className="signin">
          <div className="form-sec">
            <h4>member login</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-field">
                <input
                  type="text"
                  placeholder="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+\.\S+$/,
                  })}
                />

                {errors?.email?.type === "required" && (
                  <p className="error">required*</p>
                )}
                {errors?.email?.type === "pattern" && (
                  <p className="error">Enter valid Email*</p>
                )}
              </div>

              <div className="form-field">
                <input
                  type="text"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors?.password?.type === "required" && (
                  <p className="error">required*</p>
                )}
              </div>

              <div className="form-field">
                <button className="signin-btn">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};
