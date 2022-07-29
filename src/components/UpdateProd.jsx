import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UpdateProd() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");

    const params = useParams();
    const navigate = useNavigate()

    const notify = () => toast.success('Product Updated !', {
        hideProgressBar: true,
        autoClose: 1000,
    });

    useEffect(() => {
        getProductData();
    }, [])

    const getProductData = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        if (result) {
            setName(result.name); setPrice(result.price);
            setCategory(result.category); setCompany(result.company)
        }
    }

    const updateHandler = async () => {

        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: "PUT",
            body: JSON.stringify({ name, price, category, company }),
            headers: { 'Content-Type': 'application/json' }
        })

        result = await result.json()
        console.log(result)

        if (result) {
            navigate('/')
        }

    }


    return (
        <div className='add-prod center'>
            <h2 className='main-heading' >Update Product</h2>
            <form action="">
                <input className='input-box' type="text" placeholder='Enter Product Name' value={name} onChange={(e) => setName(e.target.value)} required />

                <input className='input-box' type="number" placeholder='Enter Product Price (in $)' value={price} onChange={(e) => setPrice(e.target.value)} required />

                <input className='input-box' type="text" placeholder='Enter Product Category' value={category} onChange={(e) => setCategory(e.target.value)} required />

                <input className='input-box' type="text" placeholder='Enter Product company' value={company} onChange={(e) => setCompany(e.target.value)} required />

                <button onClick={updateHandler} className='app-button' type='button'>Update Product</button>
            </form>

            <ToastContainer />
        </div>
    )
}
