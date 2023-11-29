'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useAddProductsToProjectModal from '../hooks/useAddProductsToProjectModal';
import MainList from './MainList';

const ProductList = ({ children }: any) => {
  const router = useRouter();

  const addProductsToProject = useAddProductsToProjectModal();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <MainList
      isOpen={addProductsToProject.isOpen}
      onClose={addProductsToProject.onClose}
      onSubmit={() => {}}
      title={`Add products`}
      children={children}
      actionLabel="submit"
      disabled={false}
    />
  );
};

export default ProductList;
