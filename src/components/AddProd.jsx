import React, { useState } from 'react'
import '../App.css'

export default function AddProd() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");

    const productHandler = async () => {
        console.log(name, price, category, company);
        const auth = localStorage.getItem('user');
        //  userId = auth._id
        console.log(auth);

        // let product = await fetch('http://localhost:5000/add-product', {
        //     method: "POST",
        //     body: JSON.stringify({ name, price, category, company, userId })
        // })

    }

    return (
        <div className='add-prod center'>
            <h1>Add Products</h1>
            <form action="">
                <input className='input-box' type="text" placeholder='Enter Product Name' value={name} onChange={(e) => setName(e.target.value)} required />

                <input className='input-box' type="number" placeholder='Enter Product Price (in $)' value={price} onChange={(e) => setPrice(e.target.value)} required />

                <input className='input-box' type="text" placeholder='Enter Product Category' value={category} onChange={(e) => setCategory(e.target.value)} required />

                <input className='input-box' type="text" placeholder='Enter Product company' value={company} onChange={(e) => setCompany(e.target.value)} required />

                <button onClick={productHandler} className='app-button' type='button'>Sign Up</button>
            </form>
        </div>
    )
}
