import getCurrentUser from './getCurrentUser';
import prisma from '@/app/libs/prismadb';

export default async function getFullProject(projectId: string) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return [];

    //running into issue where the passed in projectId is giving an error, works with a hard coded projectID string
    const fullProject = await prisma.productsInProject.findMany({
      where: {
        projectId: projectId,
      },
      include: {
        product: true,
        project: true,
      },
    });

    return fullProject;
  } catch (error: any) {
    throw new Error(error);
  }
}
