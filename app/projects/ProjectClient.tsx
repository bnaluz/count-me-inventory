'use client';
import getCurrentUser from '../actions/getCurrentUser';
import Button from '../components/Button';
import ClientOnly from '../components/ClientOnly';
import useAddProjectModal from '../components/hooks/useAddProjectModal';

const ProjectClient = () => {
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
      </div>
    </ClientOnly>
  );
};

export default ProjectClient;
