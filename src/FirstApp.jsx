import React from 'react'
import { Fragment } from 'react'

const getMsj = () => {
    return  'Retornando de una funcion';
 }
export const FirstApp = () => {
   
    const newMessage = 'Fernando!!!';
    return  (
        <>
            <h1>Alejandro</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>Soy un subtitulo</p>
        </>
        
    )
}
