import React from 'react'
/*
export default function Greet() {
    return (
        <h1>HEllp sappo sap</h1>
    )
}

*/

 export const Greet = (props) => {  // props kan döpas till vad som helst            DETTA är en funktionkKomponent
    console.log(props)  // props blir ett objekt o värde är skickad som .name

   return (
    <div>
    <h1>HEllp sappo {props.name} a.k.a {props.heroName} </h1>
    {props.children}
    </div>  //reserve plats till children
   ) 

}
//export default Greet