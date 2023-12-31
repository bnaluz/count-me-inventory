'use client';
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import { AiOutlineEdit } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import { IoMdAddCircleOutline } from 'react-icons/io';
import useAddProductsToProjectModal from '../../hooks/useAddProductsToProjectModal';

import useUpdateProjectModal from '../../hooks/useUpdateProject';

interface ProjectTableRowProps {
  projectName: string;
  projectDescription: string;
  projectId: string;
}

const ProjectTableRow: React.FC<ProjectTableRowProps> = ({
  projectDescription,
  projectId,
  projectName,
}) => {
  const updateProject = useUpdateProjectModal();

  const addProductsToProject = useAddProductsToProjectModal();
  const router = useRouter();

  const handleProjectUpdateModal = () => {
    updateProject.onOpen({
      projectDescription,
      projectId,
      projectName,
    });
  };

  const handleAddProducts = () => {
    addProductsToProject.onOpen({ projectDescription, projectId, projectName });
  };

  const handleViewProject = () => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <tr
      key={projectId}
      className="border-b dark:bg-gray-200 dark:border-gray-700"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-black whitespace-nowrap dark::text-black"
      >
        {projectName}
      </th>
      <td className="px-6 py-4">{projectDescription}</td>
      <td className="px-6 py-4">
        <button onClick={handleProjectUpdateModal}>
          <AiOutlineEdit size={16} />
        </button>
      </td>
      <td className="px-6 py-4">
        <button onClick={handleAddProducts}>
          <IoMdAddCircleOutline size={16} />
        </button>
      </td>
      <td className="px-6 py-4">
        <button onClick={handleViewProject}>
          <CiViewList size={16} />
        </button>
      </td>
    </tr>
  );
};

export default ProjectTableRow;
