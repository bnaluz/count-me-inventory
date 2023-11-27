'use client';

import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import MainModal from './MainModal';
import Input from '../inputs/Input';
import Heading from '../Heading';
import useUpdateProjectModal from '../hooks/useUpdateProject';
import { useRouter } from 'next/navigation';

const UpdateProjectModal = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { selectedItemData, isOpen, onClose } = useUpdateProjectModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>();

  useEffect(() => {
    if (selectedItemData && selectedItemData.projectId) {
      setValue('projectId', selectedItemData.projectId);
      setValue('projectName', selectedItemData.projectName);
      setValue('projectDescription', selectedItemData.projectDescription);
    }
  }, [selectedItemData]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post(`/api/project/${selectedItemData.projectId}`, data)
      .then(() => {
        toast.success('Project Updated!');
        router.refresh();
        reset();
        onClose();
      })
      .catch(() => {
        toast.error('Failed to update project');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title={'Update Project'}
        subtitle={'Modify the required fields'}
      />
      <Input
        id="projectName"
        label="Project Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="projectDescription"
        label="Project Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <MainModal
      disabled={isLoading}
      isOpen={isOpen}
      title="Update Project"
      actionLabel="Update"
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default UpdateProjectModal;
