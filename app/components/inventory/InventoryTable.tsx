'use client';

import TableHead from './TableHead';

//working on pagination for inventory table
const InventoryTable = ({ children }: any) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-10">
        <TableHead />
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
