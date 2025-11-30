import React, { createContext } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'

export const AssetContext = createContext('');

const FamilyTree = () => {

    // ancestors দের থেকে asset ধাপে ধাপে সন্তান এর কাছে যায়। একে বলে Prop drilling.

    const asset = "Diamond";
    const newAsset = "Platinum";


    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <AssetContext.Provider value={newAsset} >
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;