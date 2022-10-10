import { Mode } from "fs";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { model } from "../Services/model";
import { useRegisterUserMutation } from "../Services/myApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUp = () =>{
const [registerUser , mutationResult] = useRegisterUserMutation();
const { 
    register,
     handleSubmit,
     reset,
     formState :{ errors} } = useForm<model>();
    const onSubmit = (info:model) => {
        registerUser(info)
        reset({
            name:"",
            email: "",
            password: ""
          });
}

useEffect(()=>{
    if(mutationResult && mutationResult.status === 'fulfilled'){
        toast.success("User Registerd Successfully",
           {position: toast.POSITION.TOP_RIGHT}) 
    }
  },[mutationResult])

    return(
        <>
        <div className="form-wr">
            <div className="signin">
                <div className="form-sec">
                    <h4>member SingnUp</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-field">
                            <input type="text"
                             placeholder="name"
                             {...register("name", { required: true})}
                            />
                            {errors?.name?.type === "required" && (
                                <p className="error">required*</p>
                              )}
                        </div>
                        <div className="form-field">
                            <input type="text" 
                            placeholder="email"
                            {...register("email",{ required: true , pattern: /^\S+@\S+\.\S+$/})}
                            />
                            {errors?.email?.type === "required" && (
                                <p className="error">required*</p>
                              )}
                              {errors?.email?.type === "pattern" && (
                                <p className="error">Enter valid Email*</p>
                              )}
                        </div>
                        <div className="form-field">
                            <input type="text"
                             placeholder="Password"
                             {...register("password",{ required: true})}
                            />
                            {errors?.password?.type === "required" && (
                                <p className="error">required*</p>
                              )}
                        </div>
                        <div className="form-field">
                            <input type="submit" className="signin-btn"  value="Sign Up"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      <ToastContainer/>
    </>
    )
}