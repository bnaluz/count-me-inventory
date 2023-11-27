import { create } from 'zustand';

interface ProjectTableRowProps {
  projectId: string;
  projectName?: string;
  projectDescription?: string;
}

interface UpdateProjectModalStore {
  isOpen: boolean;
  onOpen: (selectedItem: Partial<ProjectTableRowProps>) => void;
  onClose: () => void;
  selectedItemData: Partial<ProjectTableRowProps>;
}

const useUpdateProjectModal = create<UpdateProjectModalStore>((set) => ({
  isOpen: false,
  onOpen: (selectedItem) =>
    set({ isOpen: true, selectedItemData: selectedItem }),
  onClose: () => set({ isOpen: false }),
  selectedItemData: {},
}));

export default useUpdateProjectModal;
