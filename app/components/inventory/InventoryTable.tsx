'use client';

const InventoryTable = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3">
              Product Description
            </th>
            <th scope="col" className="px-6 py-3">
              Product Price
            </th>
            <th scope="col" className="px-6 py-3">
              Product Category
            </th>
            <th scope="col" className="px-6 py-3">
              Product Location
            </th>
            <th scope="col" className="px-6 py-3">
              Total Qty
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Brand
            </th>
            <td className="px-6 py-4">Name</td>
            <td className="px-6 py-4">Description</td>
            <td className="px-6 py-4">Price</td>
            <td className="px-6 py-4">Category</td>
            <td className="px-6 py-4">Location</td>
            <td className="px-6 py-4">Quantity</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
