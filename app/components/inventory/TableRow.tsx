'use client';
import { AiOutlineEdit } from 'react-icons/ai';
import useAddInventoryModal from '../hooks/useAddInventoryModal';

interface TableRowProps {
  productBrand?: String;
  productName?: String;
  productDescription?: String;
  productCategory?: String;
  productPrice: Number;
  productLocation?: String;
  totalQty: Number;
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
  const AddInventory = useAddInventoryModal();

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
      <button
        onClick={AddInventory.onOpen}
        className=" text-xs px-4 py-2 mx-2 my-2 rounded-lg"
      >
        <AiOutlineEdit size={16} />
      </button>
    </tr>
  );
};

export default TableRow;
