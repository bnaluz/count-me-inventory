import getCurrentUser from './getCurrentUser';
import prisma from '@/app/libs/prismadb';

export default async function getInventory(){
    try{
        const currentUser = await getCurrentUser();

        if(!currentUser){
            return []
        }

    const inventory = await prisma.product.findMany({
        where:{
            
        }
    })        


    }
}
