import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h3>This is friend</h3>
            <p>Family Got: {money}</p>
        </div>
    );
};

export default Friend;