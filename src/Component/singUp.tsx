import { Mode } from "fs";
import React from "react";
import { useForm } from "react-hook-form";
import { model } from "../Services/model";
import { useRegisterUserMutation } from "../Services/myApi";

export const SignUp = () =>{
const [registerUser] = useRegisterUserMutation();

const { 
    register,
     handleSubmit,
     formState :{ errors} } = useForm<model>();
    const onSubmit = (data:model) => {
        registerUser(data)
}
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
        </>
    )
}