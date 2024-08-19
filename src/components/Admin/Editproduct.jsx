import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Editproduct = () => {
    const { id } = useParams()
    const navigate=useNavigate()
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
        useEffect(()=>{
            const fetch=async ()=>{
                try {
                   const response= await axios.get(`http://localhost:3000/ProductData/${id}`)
                    setProduct(response.data)
                } catch (error) {
                    console.error(error);
                }
               
            }
            fetch()
        },[id])
        const handleChange=(e)=>{
            const{name,value}=e.target
            setProduct({...product,[name]:value})
        }
        const handleSubmit=(e)=>{
            e.preventDefault()
            const put=async () =>{
                try {
                    await axios.patch(`http://localhost:3000/ProductData/${id}`,product)
                    alert("update successfully")

                } catch (error) {
                    console.error("error in updation");
                }
                
            }
            put()
        }

    return (
        <div className='w-screen h-screen bg-gray-50'>
            <div className='w-[1050px] ml-[250px] mt-[50px] bg-gray-100'>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label class='label'>Name:</label>
                        <input
                            type="text"
                            name="name"
                          value={product.name}
                          onChange={handleChange}
                        id='prdname' class='inp'/>
                    </div>
                    <div>
                        <label class='label'>Type:</label>
                        <input
                            type="text"
                            name="type"
                          value={product.type}
                          onChange={handleChange}
                        id='prdtype' class='inp' />
                    </div>
                    <div >
                        <label class='label'>Image URL:</label>
                        <input
                            type="text"
                            name="image"
                          value={product.image}
                          onChange={handleChange}
                        id='prdurl' class='inp' />
                    </div>
                    <div>
                        <label class='label'>Price:</label>
                        <input
                            type="text"
                            name="price"
                          value={product.price}
                          onChange={handleChange}
                        id='prdprice' class='inp' />
                    </div>
                    <div>
                        <label class='label'>Description:</label>
                        <input
                            name="description"
                          value={product.description}
                          onChange={handleChange}
                        id='prddescription' class='inp'/>
                    </div>
                    <div>
                        <label class='label'>Brand:</label>
                        <input
                            type="text"
                            name="brand"
                          value={product.brand}
                          onChange={handleChange}
                        id='prdbrand' class='inp' />
                    </div>
                    <div>
                        <label class='label'>Rating:</label>
                        <input
                            type="text"
                            name="rating"
                          value={product.rating}
                          onChange={handleChange}
                        id='prdrating' class='inp'/>
                    </div>
                    <div >
                        <label class='label'>Reviews:</label>
                        <input
                            type="text"
                            name="reviews"
                          value={product.reviews}
                          onChange={handleChange}
                        id='prdreviews' class='inp' />
                    </div>
                    <button type="submit" class='btn' id='edit'>Update Product</button>
                </form>
            </div>

        </div>
    )
}

export default Editproduct
