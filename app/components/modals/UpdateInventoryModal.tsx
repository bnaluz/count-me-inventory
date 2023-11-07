'use client';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import MainModal from './MainModal';
import Input from '../inputs/Input';
import Heading from '../Heading';
import useUpdateInventoryModal from '../hooks/useUpdateInventoryModal';

const UpdateInventoryModal = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { selectedItemData, isOpen, onClose } = useUpdateInventoryModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>();

  useEffect(() => {
    if (selectedItemData && selectedItemData.productId) {
      setValue('productId', selectedItemData.productId);
      setValue('productName', selectedItemData.productName);
      setValue('productDescription', selectedItemData.productDescription);
      setValue('productPrice', selectedItemData.productPrice);
      setValue('productBrand', selectedItemData.productBrand);
      setValue('productCategory', selectedItemData.productCategory);
      setValue('location', selectedItemData.productLocation);
      setValue('totalQty', selectedItemData.totalQty);
    }
  }, [selectedItemData]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post(`/api/inventory/${selectedItemData.productId}`, data)
      .then(() => {
        toast.success('Inventory Updated!');
        router.refresh();
        reset();
        onClose();
      })
      .catch(() => {
        toast.error('Failed to update inventory');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Update Inventory" subtitle="Modify the required fields" />
      <Input
        id="productName"
        label="Product Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="productDescription"
        label="Product Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="productPrice"
        label="Product Price"
        formatPrice
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="productBrand"
        label="Product Brand"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="productCategory"
        label="Product Category"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="location"
        label="Location"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="totalQty"
        label="Quantity on hand"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <input
        type="hidden"
        id="productId"
        {...register('productId')}
        value={selectedItemData.productId}
      />
    </div>
  );

  return (
    <MainModal
      disabled={isLoading}
      isOpen={isOpen}
      title="Update Item"
      actionLabel="Update"
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default UpdateInventoryModal;
