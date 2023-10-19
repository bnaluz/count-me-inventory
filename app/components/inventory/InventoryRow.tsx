'use client';

interface InventoryRowProps {
  productBrand: String;
  productName: String;
  productDescription: String;
  productPrice: Number;
  productCategory: String;
  location: String;
  totalQty: Number;
}

const InventoryRow: React.FC<InventoryRowProps> = ({
  productBrand,
  productName,
  productDescription,
  productPrice,
  productCategory,
  location,
  totalQty,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {productName}
      </th>
      <td className="px-6 py-4">{productBrand}</td>
      <td className="px-6 py-4">{productDescription}</td>
      <td className="px-6 py-4">{productPrice.toString()}</td>
      <td className="px-6 py-4">{productCategory}</td>
      <td className="px-6 py-4">{location}</td>
      <td className="px-6 py-4">{totalQty.toString()}</td>;
    </tr>
  );
};

export default InventoryRow;
