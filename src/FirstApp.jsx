import React from 'react'
import { Fragment } from 'react'

export const FirstApp = () => {
    const menasje = () => {
        'Retornando de una funcion ';
    }
    const newMessage = 'Fernando!!!';
    return  (
        <>
            <h1>{menasje}</h1>
            <p>Soy un subtitulo</p>
        </>
        
    )
}
