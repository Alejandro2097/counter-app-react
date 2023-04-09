import React from 'react'
import { Fragment } from 'react'

const getMsj = () => {
    return  'Retornando de una funcion';
 }
export const FirstApp = () => {
   
    const newMessage = 'Fernando!!!';
    return  (
        <>
            <h1>{getMsj()}</h1>
            <p>Soy un subtitulo</p>
        </>
        
    )
}
