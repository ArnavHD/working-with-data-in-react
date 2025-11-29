import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {

    const [error, setError] = useState('');

    const handleProductSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        
        // console.log(name, price, quantity); // যা input দেওয়া হইসে সেগুল পাওয়া যাবে। 

        // validation
        if(name.length === 0){
            setError("Please set a product Name.");  
            return;
        }
        else if(price.length === 0){
            setError("Please Provide a Price");
            return;
        }
        else if(price < 0){
            setError("Price cannot be negative");
            return;
        }
        else{
            setError('');
        }

        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct); // {name: 'Mango', price: '1000', quantity: '100000'} এমন object return করবে। 

        // if(!error){ // এটা করা ঠিক না। কারণ asynchronus হওয়ার আগে এখানে data এসে যেতে পারে। তাই return করে নিতে হবে। 
        handleAddProduct(newProduct);
        // }

    }


    return (
        <div>
            <h3>Add a product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="number" name='price' placeholder='Product Price' />
                <br />
                <input type="number" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" value='submit' />
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;