'use client';
import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import useUpdateInventoryModal from '../hooks/useUpdateInventoryModal';

interface TableRowProps {
  productBrand?: string;
  productName?: string;
  productDescription?: string;
  productCategory?: string;
  productPrice: number;
  productLocation?: string;
  totalQty: number;
}

const TableRow: React.FC<TableRowProps> = ({
  productBrand,
  productCategory,
  productDescription,
  productLocation,
  productName,
  productPrice,
  totalQty,
}) => {
  //using this, possibly creating a new updateInv modal
  const updateInventory = useUpdateInventoryModal();

  const handleOpenUpdateModal = () => {
    updateInventory.onOpen({
      productName,
      productBrand,
      productCategory,
      productDescription,
      productLocation,
      productPrice,
      totalQty,
    });
  };

  return (
    <tr className="border-b dark:bg-gray-200 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
      >
        {productName}
      </th>
      <td className="px-6 py-4">{productDescription}</td>
      <td className="px-6 py-4">{productCategory}</td>
      <td className="px-6 py-4">{productBrand}</td>
      <td className="px-6 py-4">{productLocation}</td>
      <td className="px-6 py-4">${productPrice.toString()}</td>
      <td className="px-6 py-4">{totalQty.toString()}</td>
      <td>
        <button
          onClick={handleOpenUpdateModal}
          className=" text-xs px-4 py-2 mx-2 my-2 rounded-lg"
        >
          <AiOutlineEdit size={16} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
