import { create } from 'zustand';

interface TableRowProps {
  productId: string;
  productBrand?: string;
  productName?: string;
  productDescription?: string;
  productCategory?: string;
  productPrice: number;
  productLocation?: string;
  totalQty: number;
}

interface UpdateInventoryModalStore {
  isOpen: boolean;
  onOpen: (selectedItem: Partial<TableRowProps>) => void;
  onClose: () => void;
  selectedItemData: Partial<TableRowProps>;
}

const useUpdateInventoryModal = create<UpdateInventoryModalStore>((set) => ({
  isOpen: false,
  onOpen: (selectedItem) =>
    set({ isOpen: true, selectedItemData: selectedItem }),
  onClose: () => set({ isOpen: false }),
  selectedItemData: {},
}));

export default useUpdateInventoryModal;
