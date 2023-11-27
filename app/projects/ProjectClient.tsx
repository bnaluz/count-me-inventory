'use client';

import Button from '../components/Button';

import useAddProjectModal from '../components/hooks/useAddProjectModal';

const ProjectClient = ({ children }: any) => {
  const addProjectModal = useAddProjectModal();

  return (
    <div className="mx-auto mt-8 h-screen max-w-[2440px]">
      <div className="w-full mx-auto items-center text-center">
        <div className="text-2xl uppercase mb-4">Create a new project here</div>
        <Button
          label="Add New Project"
          disabled={false}
          onClick={() => addProjectModal.onOpen()}
        />
      </div>
      <div className="pt-10">{children}</div>
    </div>
  );
};

export default ProjectClient;
