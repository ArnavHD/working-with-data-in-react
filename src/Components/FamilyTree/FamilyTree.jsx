import React from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'

const FamilyTree = () => {

    // ancestors দের থেকে asset ধাপে ধাপে সন্তান এর কাছে যায়। একে বলে Prop drilling.
    //const asset = "Diamond";


    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <Grandpa></Grandpa>
        </div>
    );
};

export default FamilyTree;