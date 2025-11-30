import React from 'react';
import Cousine from './Cousine';

const Aunt = ({ asset }) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousine asset={asset} name="Retisha"></Cousine>
                <Cousine name="Sujoy"></Cousine>
            </section>
        </div>
    );
};

export default Aunt;