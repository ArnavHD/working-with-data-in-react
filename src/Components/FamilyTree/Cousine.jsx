import React from 'react';
import Special from './Special';

const Cousine = ({ name, asset }) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === "Retisha" && <Special asset={asset}></Special>
            }
        </div>
    );
};

export default Cousine;