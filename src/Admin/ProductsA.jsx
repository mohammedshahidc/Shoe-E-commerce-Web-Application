import React, { useContext, useState } from 'react';
import { Admincontext } from './Admin context/AdminContext';
import { Link } from 'react-router-dom';

const ProductsA = () => {
    const { adproduct, productByid } = useContext(Admincontext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

   
    const currentProducts = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return adproduct.slice(startIndex, startIndex + itemsPerPage);
    };

  
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

   
    const totalPages = Math.ceil(adproduct.length / itemsPerPage);

    const getproductById = async (productId) => {
        await productByid(productId);
    };

    return (
        <div className='relative right-[-250px] justify-center justify-items-center bg-white'>
            <Link to={'/admin/productsa/AddProduct'}>
                <button className='w-[120px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black cursor-pointer mt-10'>Add Product</button>
            </Link>

            <table className="mt-5 table-auto w-[1050px] border-collapse border-solid border-2 border border-gray-900">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                        <th className="border border-gray-300 px-4 py-2">Product Name</th>
                        <th className="border border-gray-300 px-4 py-2">Product Category</th>
                        <th className="border border-gray-300 px-4 py-2">Price</th>
                        <th className="border border-gray-300 px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts().map((product) => (
                        <tr key={product._id}>
                            <td className="border border-gray-300 border-solid border-1 px-4 py-2">
                                <img src={product.image} alt={product.name} className='h-[100px]' />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{product.type}</td>
                            <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link to={`/admin/productsa/${product._id}`}>
                                    <button className='bg-blue-700 rounded-md w-[100px] h-[30px] text-white hover:bg-black cursor-pointer' onClick={() => getproductById(product._id)}>Details</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'} hover:bg-blue-600`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductsA;
