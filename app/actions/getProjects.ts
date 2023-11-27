import getCurrentUser from './getCurrentUser';
import prisma from '@/app/libs/prismadb';

//
export default async function getProjects() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const project = await prisma.project.findMany({
      where: {
        userId: currentUser.id,
      },
    });
    return project;
  } catch (error: any) {
    throw new Error(error);
  }
}
