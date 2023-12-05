'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useAddProductsToProjectModal from '../hooks/useAddProductsToProjectModal';
import MainList from './MainList';

const ProductList = ({ children }: any) => {
  const router = useRouter();
  const addProductsToProject = useAddProductsToProjectModal();
  const [isLoading, setIsLoading] = useState(false);

  const [selectedProducts, setSelectedProducts] = useState<{
    [productId: string]: number;
  }>({});

  const handleSelectProduct = (productInfo: {
    productId: string;
    quantity: number;
  }) => {
    setSelectedProducts((prevSelected) => ({
      ...prevSelected,
      [productInfo.productId]: productInfo.quantity,
    }));
  };

  const title =
    `Add products to: ${addProductsToProject.selectedItemData.projectName}`.toUpperCase();

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .post('api/fullProject', {
        projectId: addProductsToProject.selectedItemData.projectId,
        selectedProducts,
      })
      .then(() => {
        toast.success('Products added to project!');
        router.refresh();
        addProductsToProject.onClose();
      })
      .catch(() => {
        toast.error('Failed to update');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <MainList
      isOpen={addProductsToProject.isOpen}
      onClose={addProductsToProject.onClose}
      onSubmit={handleSubmit}
      title={title}
      children={React.Children.map(children, (child) =>
        React.cloneElement(child, { onSelect: handleSelectProduct })
      )}
      actionLabel="submit"
      disabled={isLoading}
    />
  );
};

export default ProductList;
