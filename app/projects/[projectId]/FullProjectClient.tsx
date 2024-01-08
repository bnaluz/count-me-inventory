'use client';

import React from 'react';
import PageHeader from './PageHeader';

type Product = {
  id: string;
  productName: string;
  productBrand: string | null;
  productDescription: string;
  productPrice: number;
  productCategory: string | null;
  location: string | null;
  totalQty: number;
};
type ProductsInProject = {
  product: Product;
  quantity: number;
};

type FullProjectClientProps = {
  prop: ProductsInProject[];
  projectName: string;
};

const FullProjectClient: React.FC<FullProjectClientProps> = ({
  prop,
  projectName,
}) => {
  return (
    <div className="container mx-auto pt-36 overflow-x-auto">
      <PageHeader projectName={projectName} />
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product Name
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Brand
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity in Project
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              On Hand
            </th>
          </tr>
        </thead>
        <tbody>
          {prop.map(({ product, quantity }) => (
            <tr key={product.id} className="bg-white border-b">
              <td className="px-4 py-2 whitespace-nowrap">
                {product.productName}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                {product.productBrand}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                ${product.productPrice.toFixed(2)}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                {product.productCategory}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                {product.location}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">{quantity}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                {product.totalQty}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FullProjectClient;
