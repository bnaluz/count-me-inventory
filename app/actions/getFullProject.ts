import prisma from '@/app/libs/prismadb';
import getCurrentUser from './getCurrentUser';

export default async function getFullProject(projectId: string) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return [];

    const fullProject = await prisma.productsInProject.findMany({
      where: {
        projectId: projectId,
      },
      include: {
        product: true,
      },
    });
    return fullProject;
  } catch (error: any) {
    throw new Error(error);
  }
}
