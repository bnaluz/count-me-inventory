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

  console.log('start here', fullProjectData);

  return (
    <ClientOnly>
      <FullProjectClient prop={fullProjectData} />
    </ClientOnly>
  );
});

export default getItem;
