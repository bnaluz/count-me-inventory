'use client';
import React from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';
import { BsCurrencyDollar } from 'react-icons/bs';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return <div></div>;
};

export default Input;
