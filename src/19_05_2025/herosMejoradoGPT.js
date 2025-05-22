import heroes from './DATA/heroes';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export const getHeroesByOwner = (owner) => {
    if (owner === 'Todos') {
        return heroes.map((heroe) => heroe.name);
    }
    return heroes.filter((heroe) => heroe.owner === owner).map((heroe) => heroe.name);
};

const MedidosPasos = () => {
    const [owner, setOwner] = useState('Marvel');
    const mensaje = getHeroesByOwner(owner);

    const backgroundColor = {
        Marvel: '#c8f7c5', // verde claro
        DC: '#c5d8f7',     // azul claro
        Todos: '#f7f7c5'   // amarillo claro
    };

    const cardStyle = {
        textAlign: 'center',
        backgroundColor: backgroundColor[owner],
        padding: '30px',
        borderRadius: '15px',
        marginTop: '40px',
        width: '400px',
        margin: '40px auto',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    };

    const buttonStyle = {
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    };

    const buttonColors = {
        Marvel: '#4caf50',
        DC: '#2196f3',
        Todos: '#ffb300'
    };

    const ulStyle = {
        listStyle: 'none',
        padding: 0,
        marginTop: '20px'
    };

    const liStyle = {
        fontSize: '18px',
        padding: '5px 0'
    };

    return (
        <div style={cardStyle}>
            <h1>{owner} Heroes</h1>
            <ul style={ulStyle}>
                {mensaje.map((nombre, index) => (
                    <li key={index} style={liStyle}>{nombre}</li>
                ))}
            </ul>

            <div>
                <button style={{ ...buttonStyle, backgroundColor: buttonColors.Marvel }} onClick={() => setOwner('Marvel')}>
                    Marvel
                </button>
                <button style={{ ...buttonStyle, backgroundColor: buttonColors.DC }} onClick={() => setOwner('DC')}>
                    DC
                </button>
                <button style={{ ...buttonStyle, backgroundColor: buttonColors.Todos }} onClick={() => setOwner('Todos')}>
                    Todos
                </button>
            </div>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<MedidosPasos />);

