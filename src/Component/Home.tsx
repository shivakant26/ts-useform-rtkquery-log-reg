import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IModel } from "../Interfaces/model";
import { useLoginUserMutation } from "../Services/myApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [ loginUser , mutationResult] = useLoginUserMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IModel>();

  const onSubmit = (info:IModel) => {
    loginUser(info);
    reset({
        email: "",
        password: ""
      });
  };

  useEffect(()=>{
    if(mutationResult && mutationResult.status === 'fulfilled'){
        localStorage.setItem("Token",JSON.stringify(mutationResult?.data?.token))
        toast.success("User Logged in Successfully",
           {position: toast.POSITION.TOP_RIGHT})
        navigate("/dashboard")
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
