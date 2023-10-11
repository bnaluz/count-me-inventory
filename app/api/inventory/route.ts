import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const {
    productName,
    productDescription,
    productPrice,
    productBrand,
    productCategory,
    location,
    totalQty,
  } = body;

  const product = await prisma.product.create({
    data: {
      productName,
      productDescription,
      productPrice: parseInt(productPrice),
      productBrand,
      productCategory,
      location,
      totalQty: parseInt(totalQty),
    },
  });

  return NextResponse.json(product);
}
