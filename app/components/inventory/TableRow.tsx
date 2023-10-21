'use client';

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
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {productName}
      </th>
      <td className="px-6 py-4">{productDescription}</td>
      <td className="px-6 py-4">{productCategory}</td>
      <td className="px-6 py-4">{productBrand}</td>
      <td className="px-6 py-4">{productLocation}</td>
      <td className="px-6 py-4">{productPrice.toString()}</td>
      <td className="px-6 py-4">{totalQty.toString()}</td>
    </tr>
  );
};

export default TableRow;
