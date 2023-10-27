'use client';

import TableHead from './TableHead';

const InventoryTable = ({ children }: any) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-md text-left text-black dark:text-black ">
        <TableHead />
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
