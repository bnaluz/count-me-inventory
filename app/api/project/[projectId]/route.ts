import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { projectName, projectDescription, projectId } = body;

  const updatedProject = await prisma.project.update({
    where: {
      id: projectId,
    },
    data: {
      projectDescription,
      projectName,
    },
  });
  return NextResponse.json(updatedProject);
}
