'use client';

import MainList from './MainList';

const ProductList = ({ children }: any) => {
  return (
    <MainList
      isOpen={true}
      onClose={() => {}}
      onSubmit={() => {}}
      title="Add Products"
      children={children}
      actionLabel="submit"
      disabled={false}
    />
  );
};

export default ProductList;
