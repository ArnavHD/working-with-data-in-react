import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousine = ({ name, asset }) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === "Retisha" && <Special asset={asset}></Special>
            }
            {
                name === "Sujoy" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousine;