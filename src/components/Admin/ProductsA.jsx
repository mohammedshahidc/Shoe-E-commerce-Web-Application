import React, { useContext } from 'react'
import { context } from '../../Apiservices/Productcontext';

const ProductsA = () => {
    const{products}=useContext(context)
    
    return (
        <div className='relative right-[-250px] justify-center justify-items-center'>
            {products.map((product)=>(
            <div>
<table className="mt-5 table-auto w-[1050px] border-collapse border-solid border-2 border border-gray-900">
                <thead>
                    <tr>
                        {/* Add table headers here */}
                        <th className="border border-gray-300 px-4 py-2">image</th>
                        <th className="border border-gray-300 px-4 py-2">Product name</th>
                        <th className="border border-gray-300 px-4 py-2">Product detailes</th>
                        <th className="border border-gray-300 px-4 py-2">Price</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* Add table data here */}
                        <td className="border border-gray-300 border-solid border-1 px-4 py-2"><img src={product.image} alt={product.name} /></td>
                       
                        <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{product.description}<br/>type:{product.type}<br/> Brand:{product.brand}<br/> Rating:{product.rating}</td>
                        <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                        {/* Add more data as needed */}
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
                
            </table>

            </div>
            ))}
            
        </div>
    );
};



export default ProductsA
