'use client';
import { SafeUser } from '@/app/types';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

//components
import useAddInventoryModal from '../hooks/useAddInventoryModal';
import useLoginModal from '../hooks/useLoginModal';
import useOrgRegisterModal from '../hooks/useOrgRegisterModal';
import useRegisterModal from '../hooks/useRegisterModal';
import MenuItem from './MenuItem';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const addInventoryModal = useAddInventoryModal();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const orgRegisterModal = useOrgRegisterModal();

  const signOutAndRefreshHandler = () => {
    router.push('/');
    setTimeout(() => {
      signOut();
    }, 100);
  };

  const routerProjectsHandler = () => {
    router.push('/projects');

    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const addInventoryHandler = () => {
    addInventoryModal.onOpen();
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

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
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => {}}
                  label={`Hello ${currentUser.name}`}
                ></MenuItem>
                <MenuItem
                  onClick={() => addInventoryHandler()}
                  label="Add Inventory Item"
                ></MenuItem>
                <MenuItem
                  onClick={() => routerProjectsHandler()}
                  label="Projects"
                ></MenuItem>
                <MenuItem onClick={() => {}} label="Vendors"></MenuItem>
                <MenuItem onClick={() => {}} label="Purchase Orders"></MenuItem>
                <MenuItem
                  onClick={() => signOutAndRefreshHandler()}
                  label="Logout"
                ></MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem
                  onClick={registerModal.onOpen}
                  label="Sign Up as User"
                />
                <MenuItem
                  onClick={orgRegisterModal.onOpen}
                  label="Sign Up as Org Admin"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
