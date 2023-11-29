import { create } from 'zustand';

interface AddProductsToProjectModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const AddProductsToProjectModal = create<AddProductsToProjectModalStore>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })
);

export default AddProductsToProjectModal;
