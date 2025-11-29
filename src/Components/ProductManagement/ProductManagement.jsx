import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    // আমাদের product table productManagement এর ভিতরে নাই। তাই আমাদের এদের উপরে একটা state নিতে হয়েছে। যাতে এখান থেকে data গুলকে manipulate করা যেতে পারে। 

    const [products, setProducts] = useState([]);

    const handleAddProduct = (newProduct) =>{
        const newProducts = [...products, newProduct];
        setProducts(newProducts);
    }
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;