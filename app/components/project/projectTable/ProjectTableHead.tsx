'use client';

const ProjectTableHead = () => {
  return (
    <thead className="text-xs text-black uppercase bg-gray-300 dark:bg-gray-300 dark:text-black ">
      <tr>
        <th scope="col" className="px-6 py-3">
          Project Name
        </th>
        <th scope="col" className="px-6 py-3">
          Project Description
        </th>
        <th scope="col" className="px-6 py-3">
          Edit
        </th>
        <th scope="col" className="px-6 py-3">
          Add Products
        </th>
        <th scope="col" className="px-6 py-3">
          View
        </th>
      </tr>
    </thead>
  );
};

export default ProjectTableHead;
