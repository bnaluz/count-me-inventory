import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();

  const { projectName, projectDescription } = body;

  const project = await prisma.project.create({
    data: {
      projectName,
      projectDescription,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(project);
}
