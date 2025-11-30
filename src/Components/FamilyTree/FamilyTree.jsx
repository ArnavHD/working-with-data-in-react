import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {

    // ancestors দের থেকে asset ধাপে ধাপে সন্তান এর কাছে যায়। একে বলে Prop drilling.

    const asset = "Diamond";
    const newAsset = "Platinum";

    const [money, setMoney] = useState(0);


    return (
        <div className='family-tree'>
            
            <h2>Family Tree</h2>
            <h4>Total Family Money: {money}</h4>
            <MoneyContext value={[money, setMoney]}> 
                <AssetContext.Provider value={newAsset} >
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;