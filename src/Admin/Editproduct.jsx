import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Usercont } from '../context/UserContext';
import { Admincontext } from './Admin context/AdminContext';
import axiosInstatnce from '../Axiosinstance';
const EditProduct = () => {
    const { id } = useParams();
    const { admin } = useContext(Usercont);
    const { getAllproducts } = useContext(Admincontext)
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        name: '',
        type: '',
        image: null,
        price: '',
        description: '',
        brand: '',
        rating: '',
        reviews: ''
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const resp = await axiosInstatnce.get(`/admin/getproductbyid/${id}`, {
                    headers: {
                        Authorization: `Bearer ${admin}`
                    }
                });

                setProduct(resp.data.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id, admin]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setProduct({
            ...product,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            for (const key in product) {
                formData.append(key, product[key]);
            }


            console.log("FormData being sent:", {
                name: formData.get("name"),
                type: formData.get("type"),
                image: formData.get("image"),
                price: formData.get("price"),
                description: formData.get("description"),
                brand: formData.get("brand"),
                rating: formData.get("rating"),
                reviews: formData.get("reviews")
            });

            await axiosInstatnce.put(`/admin/editproduct/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${admin}`
                },
            });

            alert("Updated successfully");
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Error updating product");
        }
        navigate("/admin/productsa")
        getAllproducts()
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-screen h-screen bg-gray-50'>
            <div className='w-[1050px] ml-[250px] mt-[50px] bg-gray-100'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label'>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className='inp'
                            required
                        />
                    </div>
                    <div>
                        <label className='label'>Type:</label>
                        <input
                            type="text"
                            name="type"
                            value={product.type}
                            onChange={handleChange}
                            className='inp'
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className='inp'
                        />

                        {product.image && (
                            <div className="mt-2">
                                <img
                                    src={product.image}
                                    alt="Current Product"
                                    className="h-32 w-32 object-cover"
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        <label className='label'>Price:</label>
                        <input
                            type="text"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className='inp'
                            required
                        />
                    </div>
                    <div>
                        <label className='label'>Description:</label>
                        <input
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            className='inp'
                            required
                        />
                    </div>
                    <div>
                        <label className='label'>Brand:</label>
                        <input
                            type="text"
                            name="brand"
                            value={product.brand}
                            onChange={handleChange}
                            className='inp'
                        />
                    </div>
                    <div>
                        <label className='label'>Rating:</label>
                        <input
                            type="text"
                            name="rating"
                            value={product.rating}
                            onChange={handleChange}
                            className='inp'
                        />
                    </div>
                    <div>
                        <label className='label'>Reviews:</label>
                        <input
                            type="text"
                            name="reviews"
                            value={product.reviews}
                            onChange={handleChange}
                            className='inp'
                        />
                    </div>
                    <button type="submit" className='btn'>Update Product</button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
