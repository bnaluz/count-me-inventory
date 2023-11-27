'use client';
import { AiOutlineEdit } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import { IoMdAddCircleOutline } from 'react-icons/io';

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
        <button>
          <AiOutlineEdit size={16} />
        </button>
      </td>
      <td className="px-6 py-4">
        <button>
          <IoMdAddCircleOutline size={16} />
        </button>
      </td>
      <td className="px-6 py-4">
        <button>
          <CiViewList size={16} />
        </button>
      </td>
    </tr>
  );
};

export default ProjectTableRow;
