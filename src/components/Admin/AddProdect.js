import React, { useState } from 'react'
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
    reviews: ''
  });
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value, })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/ProductData', product)
      .then(() => {
        alert('Product added successfully!');

        setProduct({
          name: '',
          type: '',
          image: '',
          price: '',
          description: '',
          brand: '',
          rating: '',
          reviews: ''
        });
      })
      .catch(error => {
        console.error('There was an error adding the product!', error)
      })
  }
  return (
    <div className='w-screen h-screen' >
      <div className='w-[1050px] ml-[250px] mt-[50px] bg-gray-100'>

        <form onSubmit={handleSubmit}>
          <label class='label'>Product Name : </label><input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required id='prdname' class='inp' /><br />
          <label class='label'>Type : </label><input type="text" name="type" value={product.type} onChange={handleChange} placeholder="Product Type" required id='prdtype' class='inp' /><br />
          <label class='label'>Image : </label><input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" required id='prdurl' class='inp' /><br />
          <label class='label'>Price : </label><input type="text" name="price" value={product.price} onChange={handleChange} placeholder="Price" required id='prdprice' class='inp' /><br />
          <label class='label'>Description : </label><input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" required id='prddescription' class='inp' /><br />
          <label class='label'>Brand : </label><input type="text" name="brand" value={product.brand} onChange={handleChange} placeholder="Brand" required id='prdbrand' class='inp' /><br />
          <label class='label'>Rating : </label><input type="text" name="rating" value={product.rating} onChange={handleChange} placeholder="Rating" step="0.1" required id='prdrating' class='inp' /><br />
          <label class='label'>Reviews : </label><input type="text" name="reviews" value={product.reviews} onChange={handleChange} placeholder="Reviews" required id='prdreviews' class='inp' /><br />
          <button type="submit" class='btn' id='add'>Add Product</button>

        </form>
      </div>

    </div>
  )
}

export default AddProdect
