import { create } from 'zustand';

interface AddProjectModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddProjectModal = create<AddProjectModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddProjectModal;
