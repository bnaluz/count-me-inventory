'use client';

import ProjectTableHead from './ProjectTableHead';

const ProjectTable = ({ children }: any) => {
  return (
    <div className="relative max-w-[1640px] overflow-x-auto mx-auto rounded-md">
      <table className="w-full text-md text-left text-black dark:text-black ">
        <ProjectTableHead />
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
