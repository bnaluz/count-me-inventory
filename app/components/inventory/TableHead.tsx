'use client';

const TableHead = () => {
  return (
    <thead className="text-xs text-black uppercase bg-gray-300 dark:bg-gray-300 dark:text-black ">
      <tr>
        <th scope="col" className="px-6 py-3">
          Product Name
        </th>
        <th scope="col" className="px-6 py-3">
          Product Description
        </th>
        <th scope="col" className="px-6 py-3">
          Product Category
        </th>
        <th scope="col" className="px-6 py-3">
          Product Brand
        </th>
        <th scope="col" className="px-6 py-3">
          Product Location
        </th>
        <th scope="col" className="px-6 py-3">
          Product Price
        </th>
        <th scope="col" className="px-6 py-3">
          Total Qty
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
