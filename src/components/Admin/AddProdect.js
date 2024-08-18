import React,{useState} from 'react'
import axios from 'axios';

const AddProdect = () => {
    const [product, setProduct] = useState({
        name: '',
        type: '',
        image: '',
        price: '',
        description: '',
        brand: '',
        rating: '',
        reviews: '',
      });
      const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:3000/ProductData', product);
          alert('Product added successfully');
          
          setProduct({
            name: '',
            type: '',
            image: '',
            price: '',
            description: '',
            brand: '',
            rating: '',
            reviews: '',
          });
        } catch (error) {
          console.error('Error adding product:', error);
          alert('Failed to add product');
        }  }  
  return (
    <div id='di' className='flex items-center justify-center w-screen h-screen '>
    <form onSubmit={handleSubmit} className='w-[600px] h-[500px] ml-[200px] bg-white p-10 rounded-lg shadow-lg'>
      <div className='mb-4'>
        <label className='block text-gray-700 font-semibold mb-2'>Product Name:</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Product Name" 
          value={product.name} 
          onChange={handleChange} 
          required 
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
      </div>
  
      <div className='mb-4'>
        <label className='block text-gray-700 font-semibold mb-2'>Type:</label>
        <input 
          type="text" 
          name="type" 
          placeholder="Type" 
          value={product.type} 
          onChange={handleChange} 
          required 
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
      </div>
  
      <div className='mb-4'>
        <label className='block text-gray-700 font-semibold mb-2'>Image:</label>
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={product.image} 
          onChange={handleChange} 
          required 
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
      </div>
  
      <div className='mb-4'>
        <label className='block text-gray-700 font-semibold mb-2'>Price:</label>
        <input 
          type="number" 
          name="price" 
          placeholder="Price" 
          value={product.price} 
          onChange={handleChange} 
          required 
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
      </div>
  
      <div className='mb-4'>
        <label className='block text-gray-700 font-semibold mb-2'>Description:</label>
        <input 
          type="text" 
          name="description" 
          placeholder="Description" 
          value={product.description} 
          onChange={handleChange} 
          required 
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
      </div>
  
      <div className='mb-4'>
        <label className='block text-gray-700 font-semibold mb-2'>Brand:</label>
        <input 
          type="text" 
          name="brand" 
          placeholder="Brand" 
          value={product.brand} 
          onChange={handleChange} 
          required 
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
      </div>
  
      <div className='mb-4'>
        <label className='block text-gray-700 font-semibold mb-2'>Rating:</label>
        <input 
          type="number" 
          name="rating" 
          placeholder="Rating" 
          value={product.rating} 
          onChange={handleChange} 
          required 
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
      </div>
  
      <div className='mb-6'>
        <label className='block text-gray-700 font-semibold mb-2'>Reviews:</label>
        <input 
          type="number" 
          name="reviews" 
          placeholder="Reviews" 
          value={product.reviews} 
          onChange={handleChange} 
          required 
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
        <button class='btn' id='bt' type='submit'>Add Product</button>
      </div>
      </form>
      </div>
  )
}

export default AddProdect;
