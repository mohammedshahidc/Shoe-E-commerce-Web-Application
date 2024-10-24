import React, { useContext } from 'react';
import { context } from '../../../context/Productcontext';
import { Link} from 'react-router-dom';

const Mens = () => {
  const { products } = useContext(context);


  const filter = products.filter((product) => product.type === "men");

  return (
    <div className='bg-cover bg-center h-full w-full bg-gray-200'>
      <div className='flex flex-wrap justify-center gap-6 p-6'>
        {filter.map((product) => (
          <div
            className="w-[300px] bg-gray-200 border border-gray-200 rounded-lg shadow-md overflow-hidden hover:transition-transform transform scale-100 hover:scale-110"
            key={product._id}
          >
            <Link to={product._id} className="block">
              <img
                src={product.image}
                alt='product image'
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h5>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h5>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">₹ {product.price}</h5>
                <p className="text-gray-700 mb-4">{product.description}</p>

              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mens;
