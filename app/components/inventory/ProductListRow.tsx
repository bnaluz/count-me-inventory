'use client';
import { useState } from 'react';

interface ProductListRowProps {
  productId: string;
  productName: string;
  productDescription: string;
  onSelect: (productInfo: { productId: string; quantity: number }) => void;
}

const ProductListRow: React.FC<ProductListRowProps> = ({
  productId,
  productName,
  productDescription,
  onSelect,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number | ''>(0);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === '') {
      setSelectedQuantity(value === '' ? '' : Number(value));
      onSelect({
        productId,
        quantity: value === '' ? 0 : Number(value),
      });
    }
  };

  return (
    <div
      key={productId}
      className="flex items-center p-4 border-b border-gray-300 w-full"
    >
      <div className="flex items-center mr-4">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500"
          onChange={() => {}}
          checked={selectedQuantity > 0}
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="text-gray-800 font-semibold text-lg">{productName}</div>
        <div className="text-gray-500">{productDescription}</div>
      </div>
      <div className="ml-auto flex items-center">
        <div className="mr-2">Quantity:</div>
        <input
          type="number"
          className="border border-gray-300 p-1 w-16 text-center"
          value={selectedQuantity === '' ? '' : Math.max(0, selectedQuantity)}
          onChange={handleQuantityChange}
        />
      </div>
    </div>
  );
};

export default ProductListRow;
