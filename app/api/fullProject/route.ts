import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

interface ProductsInProjectData {
  projectId: string;
  selectedProducts: { [productId: string]: number };
}

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();

  const { projectId, selectedProducts }: ProductsInProjectData = body;

  const productsInProjectData = Object.entries(selectedProducts).map(
    ([productId, quantity]) => ({
      userId: currentUser.id,
      projectId,
      productId,
      quantity,
    })
  );

  const productsInProject = await prisma.productsInProject.createMany({
    data: productsInProjectData,
  });

  return NextResponse.json({ productsInProject });
}
