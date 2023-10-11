import { create } from 'zustand';

interface AddInventoryModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddInventoryModal = create<AddInventoryModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddInventoryModal;
