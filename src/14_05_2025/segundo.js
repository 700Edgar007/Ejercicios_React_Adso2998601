// usando el setTimeout()
// caja de texto basia 



import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';




const App = () => {
    const [saludo, setHola] = useState("");

    setTimeout(() => {
        setHola("hola desde la alerta despues de 3 segundos");
    }, "3000");

    return (
        <div style={{textAlign: "center",backgroundColor: "lightblue",padding: "20px",borderRadius: "10px",marginTop: "20px",}}>
            
            <input type="text"  value={saludo}   setHola={<setHola/>} />

            
            
        </div>
        
        //readOnly
        //setHola={<setHola/>
              
    );
};




//ReactDOM.createRoot(document.getElementById('root')).render(<MedidosPasos />);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);//si es un conpoenente se tiene que hacer en pascal case que es Grafico en mayuscula