import { create } from 'zustand';

interface ProjectTableRowProps {
  projectId: string;
  projectName?: string;
  projectDescription?: string;
}

interface AddProductsToProjectModalStore {
  isOpen: boolean;
  onOpen: (selectedItem: Partial<ProjectTableRowProps>) => void;
  onClose: () => void;
  selectedItemData: Partial<ProjectTableRowProps>;
}

const AddProductsToProjectModal = create<AddProductsToProjectModalStore>(
  (set) => ({
    isOpen: false,
    onOpen: (selectedItem) =>
      set({ isOpen: true, selectedItemData: selectedItem }),
    onClose: () => set({ isOpen: false }),
    selectedItemData: {},
  })
);

export default AddProductsToProjectModal;
