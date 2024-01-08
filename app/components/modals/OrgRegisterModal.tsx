'use client';

import axios from 'axios';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import useOrgRegisterModal from '../hooks/useOrgRegisterModal';
import useLoginModal from '../hooks/useLoginModal';
import MainModal from './MainModal';
import Input from '../inputs/Input';
import Heading from '../Heading';

const OrgRegisterModal = () => {
  const orgRegisterModal = useOrgRegisterModal();

  const loginModal = useLoginModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      organizationName: '',
      adminUserName: '',
      adminEmail: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    axios
      .post('/api/orgRegister', data)
      .then(() => {
        toast.success('Successful registration.');
        orgRegisterModal.onClose();
        loginModal.onOpen();
      })
      .catch((error) => {
        toast.error('Unsuccessful registration. Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    loginModal.onOpen();
    orgRegisterModal.onClose();
  }, [loginModal, orgRegisterModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to CountMeInventory"
        subtitle="Create your organization account"
      />
      <Input
        id="organizationName"
        label="Organization Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="adminUserName"
        label="Admin User Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="adminEmail"
        label="Admin Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>Already have an account?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={toggle}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <MainModal
      disabled={isLoading}
      isOpen={orgRegisterModal.isOpen}
      title="Register Organization"
      actionLabel="Continue"
      onClose={orgRegisterModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default OrgRegisterModal;
