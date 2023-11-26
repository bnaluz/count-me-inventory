'use client';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
//components
import MainModal from './MainModal';
import Input from '../inputs/Input';
import useAddProjectModal from '../hooks/useAddProjectModal';
import Heading from '../Heading';

const AddProjectModal = () => {
  const router = useRouter();
  //pull stores in
  const addProjectModal = useAddProjectModal();

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
      projectName: '',
      projectDescription: '',
    },
  });

  //sending form data off to API
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    // console.log(data);
    axios
      .post('/api/project', data)
      .then(() => {
        toast.success('Project Added!');
        router.refresh();
        reset();
        addProjectModal.onClose();
      })
      .catch(() => {
        toast.error('Failed to add project');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Add New Project"
        subtitle="Please fill out the required fields"
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
      isOpen={addProjectModal.isOpen}
      title="Add Project"
      actionLabel="Continue"
      onClose={addProjectModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      // footer={footerContent}
    />
  );
};

export default AddProjectModal;
