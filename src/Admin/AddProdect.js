import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Usercont } from '../context/UserContext';

const AddProduct = () => {
  const { admin } = useContext(Usercont);
  const [product, setProduct] = useState({
    name: '',
    type: '',
    price: '',
    description: '',
    brand: '',
    rating: '',
    reviews: ''
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setImage(e.target.files[0]);
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

 

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('image', image);
    Object.keys(product).forEach(key => formData.append(key, product[key]));

    try {
      await axios.post('http://localhost:4004/api/admin/addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${admin}`
        },
      });
      alert('Product added successfully!');
      setProduct({
        name: '',
        type: '',
        price: '',
        description: '',
        brand: '',
        rating: '',
        reviews: ''
      });
      setImage(null);
    } catch (error) {
      console.error('There was an error adding the product!', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-[850px] h-screen flex justify-center items-center ml-[100px]'>
      <div className='w-[600px] p-6 bg-gray-100 rounded-lg shadow-lg'>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h2 className='text-2xl font-semibold mb-4'>Add New Product</h2>

            <label className='label ml-[400px]'>Product Name:</label>
            <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required className='inp mb-4 p-2 border rounded w-full' />

            <label className='label ml-[400px]'>Type:</label>
            <input type="text" name="type" value={product.type} onChange={handleChange} placeholder="Product Type" required className='inp mb-4 p-2 border rounded w-full' />

            <div 
              className='mb-4 p-4 border-dashed border-2 border-gray-400 rounded cursor-pointer' 
              
            >
             
              <label className='label ml-[400px]' >image</label>
                <input 
                  type="file" 
                  name="image" 
                  onChange={handleChange} 
                />
              
            </div>

            <label className='label  ml-[400px]'>Price:</label>
            <input type="text" name="price" value={product.price} onChange={handleChange} placeholder="Price" required className='inp mb-4 p-2 border rounded w-full' />

            <label className='label  ml-[400px]'>Description:</label>
            <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" required className='inp mb-4 p-2 border rounded w-full' />

            <label className='label  ml-[400px]'>Brand:</label>
            <input type="text" name="brand" value={product.brand} onChange={handleChange} placeholder="Brand" required className='inp mb-4 p-2 border rounded w-full' />

            <label className='label  ml-[400px]'>Rating:</label>
            <input type="text" name="rating" value={product.rating} onChange={handleChange} placeholder="Rating" required className='inp mb-4 p-2 border rounded w-full' />

            <label className='label  ml-[400px]'>Reviews:</label>
            <input type="text" name="reviews" value={product.reviews} onChange={handleChange} placeholder="Reviews" required className='inp mb-4 p-2 border rounded w-full' />

            <button type="submit" className='btn ml-[400px]'>Add Product</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
