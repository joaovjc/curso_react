/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Form.css"
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { PopupError } from "./PopUpError"
import { PopUpValidation } from "./PopUpValidation"
import { LOGINERROR, REQUIREDPASSWORD, REQUIREDUSERNAME, MIN_4 } from "../helpers/validation.helper"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schemaValidation = yup.object({
    username: yup.string().required(REQUIREDUSERNAME).min(4, MIN_4),
    password: yup.string().required(REQUIREDPASSWORD)
  });
export const FormLoginComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schemaValidation)
    });

    const onSubmit = handleSubmit((form) => {
        if(!isOpen)togglePopup();
    });

    return (
        <div class="main-container">
            <div class="header-container">
                <p>Sign in to GitHub</p>
            </div>
            {isOpen && <PopupError 
            content={LOGINERROR}
            handleClose={togglePopup}
            />}
            {errors.username && <PopUpValidation 
            content={errors.username.message}
            />}
            {errors.password && <PopUpValidation 
            content={errors.password.message}
            />}
            <div class="form-container">
                <form onSubmit={onSubmit} class="login">
                    <label htmlFor="username">Username or email address</label>
                    <input type="text" name="username" {...register("username")} />
                    <div class="forgot-password">
                        <label htmlFor="password">Password</label>
                        <a href="http://" target="_blank" rel="noopener noreferrer">Forgot password?</a>
                    </div>
                    <input type="password" name="password" {...register("password")}/>
                    <button type="submit">Sign in</button>
                </form>
            </div>
            <div class="foot-container">
                <p>
                    New to GitHub? <a href="#">Create an account.</a>
                </p>
            </div>
        </div>
    )
}