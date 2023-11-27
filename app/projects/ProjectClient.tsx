'use client';

import Button from '../components/Button';
import ClientOnly from '../components/ClientOnly';
import useAddProjectModal from '../components/hooks/useAddProjectModal';
import ProjectTable from '../components/project/projectTable/ProjectTable';
import ProjectTableRow from '../components/project/projectTable/ProjectTableRow';

interface ProjectClientProps {
  projectName: string;
  projectDescription: string;
  projectId: string;
}

const ProjectClient: React.FC<ProjectClientProps> = ({
  projectName,
  projectDescription,
  projectId,
}) => {
  const addProjectModal = useAddProjectModal();

  return (
    <ClientOnly>
      <div className="mx-auto mt-8 h-screen max-w-[2440px]">
        <div className="w-full mx-auto items-center text-center">
          <div className="text-2xl uppercase mb-4">
            Create a new project here
          </div>
          <Button
            label="Add New Project"
            disabled={false}
            onClick={() => addProjectModal.onOpen()}
          />
        </div>
        <div className="w-full mx-auto mt-10 items-center">
          <ProjectTable>
            <ProjectTableRow
              projectName={projectName}
              projectDescription={projectDescription}
              projectId={projectId}
            />
          </ProjectTable>
        </div>
      </div>
    </ClientOnly>
  );
};

export default ProjectClient;
