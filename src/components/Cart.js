import React from 'react'

const Cart = () => {
  return (
    <div>
      <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-gray-800 text-white">
        <thead className="bg-gray-700">
          <tr>
            {/* Add your table headers here */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Header 1</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">item</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          <tr className="bg-gray-600">
            {/* Add your table row data here */}
            <td className="px-6 py-4 text-sm font-medium text-gray-200">Data 1</td>
            <td className="px-6 py-4 text-sm font-medium text-gray-200">Data 2</td>
            <td className="px-6 py-4 text-sm font-medium text-gray-200">Data 3</td>
            <td className="px-6 py-4 text-sm font-medium text-gray-200">Data 4</td>
          </tr>
         
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Cart
