import getFullProject from '@/app/actions/getFullProject';
import ClientOnly from '@/app/components/ClientOnly';
import { cache } from 'react';
import FullProjectClient from './FullProjectClient';

const getItem = cache(async (projectId: any) => {
  if (!projectId) {
    // Need to handle the case where no projectID later
    return <div>No projectId provided</div>;
  }

  const fullProjectData = await getFullProject(projectId.params.projectId);

  const projectName =
    fullProjectData.length > 0
      ? fullProjectData[0].project.projectName
      : 'Unknown Project';

  console.log('start here', fullProjectData);

  return (
    <ClientOnly>
      <FullProjectClient prop={fullProjectData} projectName={projectName} />
    </ClientOnly>
  );
});

export default getItem;
