import React, { useContext } from 'react';
import Cousine from './Cousine';
import { MoneyContext } from './FamilyTree';

const Aunt = ({ asset }) => {

    const [money, setMoney] = useContext(MoneyContext);

    const handleAddMoney = () =>{
        setMoney(money + 5000);
    }
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousine asset={asset} name="Retisha"></Cousine>
                <Cousine name="Sujoy"></Cousine>
            </section>
            <button onClick={handleAddMoney}>Add 5000 tk</button>
        </div>
    );
};

export default Aunt;