// setTimeout()



import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';




const MedidosPasos = () => {
    const [pasos, setPasos] = useState(0);

    const mensaje =
        pasos >= 10? "🔥🔥🔥 Estas avanzando satisfactoriamente": "💪💪💪 Sigue caminando";

    const colores = pasos >= 10 ? "lightgreen" : "lightblue";

    return (
        <div style={{textAlign: "center",backgroundColor: colores,padding: "20px",borderRadius: "10px",marginTop: "20px",}}>


            <h1>pasos hoy {pasos}</h1>

                <h2>{mensaje}</h2>
                <button onClick={()=>setPasos(pasos +1)}>➕➕➕Paso</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={()=>setPasos(pasos-1)}>➖➖➖Paso</button>
        </div>
    );
};




ReactDOM.createRoot(document.getElementById('root')).render(<MedidosPasos />);


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <MedidosPasos/>//si es un conpoenente se tiene que hacer en pascal case que es Grafico en mayuscula
// );