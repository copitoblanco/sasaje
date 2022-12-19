import React, { useState, useEffect } from "react";
import axios from "axios";
import JugadorForm from "./JugadorForm";

const CreateJugador = () => {
    const [formValues, setFormValues] = 
    useState({ id: '', name: ''})
    const onSubmit = jugadorObject => {
        axios.post('http://localhost:4000/jugador',jugadorObject)
        .then(res => {
        if (res.status === 200){
            alert('Student successfully created')
        }else
            Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    }
    return(
    <JugadorForm initialValues={formValues} 
        onSubmit={onSubmit} 
        enableReinitialize>
        Create Jugador
    </JugadorForm>
    )
}

export default CreateJugador