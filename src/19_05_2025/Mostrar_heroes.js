import heroes from './DATA/heroes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

export const getheroesByOwner = (owner) =>
    heroes.filter((heroe) => heroe.owner === owner).map((heroe) => heroe.name);

export const getheroesByOwnerTodos = (owner) =>owner === 'Todos'? heroes.map((heroe) => heroe.name): heroes.filter((heroe) => heroe.owner === owner).map((heroe) => heroe.name);

const Mostrar_heroes = () => {
    const [owner, setOwner] = useState('Marvel');
    const mensajeTodos = getheroesByOwnerTodos(owner);
    const colores =
        owner === 'Marvel' ? 'lightgreen' :
        owner === 'DC' ? 'lightblue' : 'lightgray';

    return (
        <div style={{ textAlign: 'center', backgroundColor: colores, padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
            <h1>{owner}</h1>
            <ul>
                {mensajeTodos.map((nombre, index) => (
                    <li key={index}>{nombre}</li>
                ))}
                
            </ul>

            <button onClick={() => setOwner('Marvel')}>Marvel</button>
            <br /><br />
            <button onClick={() => setOwner('DC')}>DC</button>
            <br /><br />
            <button onClick={() => setOwner('Todos')}>Todos</button>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Mostrar_heroes />);
