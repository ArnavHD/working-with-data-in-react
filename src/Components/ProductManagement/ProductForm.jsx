import React from 'react';

const ProductForm = () => {

    const handleProductSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        
        // console.log(name, price, quantity); // যা input দেওয়া হইসে সেগুল পাওয়া যাবে। 

        const newProduct = {
            name,
            price,
            quantity
        }
        console.log(newProduct); // {name: 'Mango', price: '1000', quantity: '100000'} এমন object return করবে। 

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
        </div>
    );
};

export default ProductForm;