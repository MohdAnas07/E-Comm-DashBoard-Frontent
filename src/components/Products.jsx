import React, { useEffect, useState } from 'react'
import '../App.css'

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }
    console.log(products);


    return (
        <div className='products'>
            <h2 style={{ 'textAlign': 'center' }}>Products List</h2>
            <div className="product-list">
                <ul style={{ 'fontWeight': 'bold' }}>
                    <li>S No.</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Company</li>
                </ul>
                {
                    products.map((product, index) =>
                        <ul key={index}>
                            <li>{index + 1}</li>
                            <li>{product.name} </li>
                            <li>${product.price} </li>
                            <li>{product.category} </li>
                            <li> {product.company} </li>
                        </ul>
                    )
                }

            </div>
        </div>
    )
}
