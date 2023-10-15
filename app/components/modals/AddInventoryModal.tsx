'use client';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
//components
import MainModal from './MainModal';
import Input from '../inputs/Input';
import useAddInventoryModal from '../hooks/useAddInventoryModal';
import Heading from '../Heading';

const AddInventoryModal = () => {
  const router = useRouter();
  //pull stores in
  const addInventoryModal = useAddInventoryModal();

  //loading state
  const [isLoading, setIsLoading] = useState(false);

  //react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      productName: '',
      productDescription: '',
      productPrice: 0,
      productBrand: '',
      productCategory: '',
      location: '',
      totalQty: 0,
    },
  });

  //sending form data off to API
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    axios
      .post('/api/inventory', data)
      .then(() => {
        toast.success('Inventory updated!');
        router.refresh();
        reset();
        addInventoryModal.onClose();
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Add New Inventory Item"
        subtitle="Please fill out the required fields"
      />
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
    </div>
  );

  // const footerContent = (
  //   <div className="flex flex-col gap-4 mt-3">
  //     <div className="text-neutral-500 text-center mt-4 font-light">
  //       <div className="justify-center flex flex-row items-center gap-2">
  //         <div>Create</div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <MainModal
      disabled={isLoading}
      isOpen={addInventoryModal.isOpen}
      title="Add Item"
      actionLabel="Continue"
      onClose={addInventoryModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      // footer={footerContent}
    />
  );
};

export default AddInventoryModal;
