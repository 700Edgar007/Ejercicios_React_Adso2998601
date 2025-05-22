import heroes from './DATA/heroes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';


export const getheroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner).map((heroe) => [ heroe.name]);


const MedidosPasos = () => {
    const [pasos, setPasos] = useState("marvel");

    const mensaje =
        pasos >=1? getheroesByOwner('DC'): getheroesByOwner('Marvel');
        

    const colores = pasos >= 1 ? "lightgreen" : "lightblue";

    return (
        <div style={{textAlign: "center",backgroundColor: colores,padding: "20px",borderRadius: "10px",marginTop: "20px",pruva: "prueba"}}>

            <h1 id="prueva" >{mensaje  }</h1>
            <button onClick={()=>setPasos(pasos+1)}>Marvel</button>

            <br></br>
            <br></br>

            <button onClick={()=>setPasos(pasos-1)}>DC</button>

            
            


        </div>

    );
};


ReactDOM.createRoot(document.getElementById('root')).render(<MedidosPasos />);
