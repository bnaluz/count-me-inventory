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
    productId,
  } = body;

  //ran into issue submitting update for productData due to type - created safeTypes below and update now works
  const safePrice = parseFloat(productPrice);
  const safeQty = Number(totalQty);

  //TODO: need to change the where: from productName to an id, currently running into an error whenever the product name tried to change

  const updatedItem = await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      productBrand,
      productName,
      productDescription,
      productPrice: safePrice,
      productCategory,
      location,
      totalQty: safeQty,
    },
  });
  return NextResponse.json(updatedItem);
}
