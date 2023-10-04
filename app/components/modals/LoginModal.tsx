'use client';

import useRegisterModal from '../hooks/useRegisterModal';
import useLoginModal from '../hooks/useLoginModal';

import { useCallback, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const router = useRouter();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { email: '', password: '' },
  });

  //need submit handler

  const toggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onClose();
  }, [loginModal, registerModal]);

  return <div></div>;
};

export default LoginModal;
