'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div
        onClick={toggleOpen}
        className="p-4 pb-4 md:py-1 md:px-2 border-[1px] bg-white border-neutral-100 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-sm transition"
      >
        <div>Menu</div>
        <AiOutlineMenu />
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md md:w-[17vw] mt-4 md:mt-0 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <MenuItem onClick={() => {}} label="Hello, UserName"></MenuItem>
            <MenuItem onClick={() => {}} label="Inventory"></MenuItem>
            <MenuItem onClick={() => {}} label="Projects"></MenuItem>
            <MenuItem onClick={() => {}} label="Vendors"></MenuItem>
            <MenuItem onClick={() => {}} label="Purchase Orders"></MenuItem>
            <MenuItem onClick={() => {}} label="Logout"></MenuItem>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
