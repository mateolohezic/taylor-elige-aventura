import React, { useState } from 'react';
import './inicio.css'
import { useForm } from "react-hook-form";

function Inicio() {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });

    const onSubmit = async (data) => {
        const trimmedName = data.name.trim();
        const formattedName = trimmedName.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());

        localStorage.setItem("name", formattedName);
        window.location.replace("/Hoja-1");
    };

    const name = localStorage.getItem("name")

    return (
        <>
            <div className='labelIngresarNombra'>Para empezar ingresa un nombre:</div>
            <form onSubmit={handleSubmit(onSubmit)} className='formNombre'>
                <div className="form-group">
                    <input
                        autoComplete='false'
                        id='name'
                        type="text"
                        className="inputNombre form-control"
                        {...register("name", {
                            required: true,
                            maxLength: 40,
                        })}
                        />
                {errors.name && errors.name.type === "required" && (
                    <p className="errorInput">Ingresa un nombre.</p>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                    <p className="errorInput">Demasiado largo.</p>
                )}
                </div>
                <div className='botonEmpezar'><button type='submit'>SIGUIENTE</button></div>
            </form>
        </>
    )
}

export default Inicio