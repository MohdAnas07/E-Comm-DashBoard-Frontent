import React, { useState } from 'react'
import '../App.css'

export default function AddProd() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const [add, setAdd] = useState(false);



    const productHandler = async () => {
        console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        // console.log(userId);

        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }

        let product = await fetch('http://localhost:5000/add-product', {
            method: "POST",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: { 'Content-Type': 'application/json' }
        })

        let result = await product.json();

        if (result) {
            console.log(result);
            setAdd(true);
            setTimeout(() => {
                setAdd(false)
            }, 1200);
            // setName(""); setCategory(""); setCompany(""); setPrice("");

        } else {

        }
    }


    return (
        <div className='add-prod center'>
            <h2 className='main-heading' >Add Products</h2>
            <form action="">
                <input className='input-box' type="text" placeholder='Enter Product Name' value={name} onChange={(e) => setName(e.target.value)} required />
                {error && !name && <span className='invalid-input'>enter valid name</span>}
                <input className='input-box' type="number" placeholder='Enter Product Price (in $)' value={price} onChange={(e) => setPrice(e.target.value)} required />
                {error && !price && <span className='invalid-input'>enter valid price</span>}

                <input className='input-box' type="text" placeholder='Enter Product Category' value={category} onChange={(e) => setCategory(e.target.value)} required />
                {error && !category && <span className='invalid-input'>enter valid category</span>}


                <input className='input-box' type="text" placeholder='Enter Product company' value={company} onChange={(e) => setCompany(e.target.value)} required />
                {error && !company && <span className='invalid-input'>enter valid company</span>}

                <button onClick={productHandler} className='app-button' type='button'>{add ? "Added" : "Add Product"}</button>
            </form>
        </div>
    )
}
