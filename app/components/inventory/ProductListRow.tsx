'use client';

import { useState } from 'react';

interface ProductListRowProps {
  productId: string;
  productName: string;
  productDescription: string;
  onSelectProducts?: (selectedProducts: {
    [productId: string]: number;
  }) => void;
}

const ProductListRow: React.FC<ProductListRowProps> = ({
  productDescription,
  productId,
  productName,
  onSelectProducts,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  //   const handleSelectProduct = () => {
  //     onSelectProducts({ [productId]: selectedQuantity });
  //   };

  return (
    <div key={productId} className="p-4 flex flex-row border-b border-gray-300">
      <div className="flex mb-2">
        <input
          type="checkbox"
          className="mr-2"
          onChange={() => {}}
          checked={selectedQuantity > 0}
        />
      </div>
      <div className="flex">
        <div className="text-gray-800 font-semibold">{productName}</div>
        <div className="text-gray-800 font-semibold">{productDescription}</div>
      </div>
    </div>
  );
};

export default ProductListRow;
