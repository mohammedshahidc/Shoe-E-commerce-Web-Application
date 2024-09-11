import React, { useContext } from 'react'
import { context } from '../../Apiservices/Productcontext';
import { Link } from 'react-router-dom';

const ProductsA = () => {
    const { products } = useContext(context);

    return (
        <div className='relative right-[-250px] justify-center justify-items-center bg-white'>
            <Link to={'/admin/productsa/AddProduct'}><button className='w-[120px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black cursor-pointer mt-10' >Add Product</button></Link>

            <table className="mt-5 table-auto w-[1050px] border-collapse border-solid border-2 border border-gray-900">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                        <th className="border border-gray-300 px-4 py-2">Product Name</th>
                        <th className="border border-gray-300 px-4 py-2">Product category</th>
                        <th className="border border-gray-300 px-4 py-2">Price</th>
                        <th className="border border-gray-300 px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="border border-gray-300 border-solid border-1 px-4 py-2">
                                <img src={product.image} alt={product.name} className='h-[100px]' />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                {product.type}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link to={`/admin/productsa/${product.id}`}>
                                    <button className='bg-blue-700 rounded-md w-[100px] h-[30px] text-white hover:bg-black cursor-pointer'>Details</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsA;
