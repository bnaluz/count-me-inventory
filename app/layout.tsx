import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ToasterProvider from './components/providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import getCurrentUser from './actions/getCurrentUser';
import AddInventoryModal from './components/modals/AddInventoryModal';
import getInventory from './actions/getInventory';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Count Me Inventory',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  const inventory = await getInventory();
  console.log(inventory);

  let total = 0;
  for (let i = 0; i < inventory.length; i++) {
    let eachTotal = inventory[i].productPrice * inventory[i].totalQty;
    total += eachTotal;
  }
  console.log(total.toFixed(2));

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <LoginModal />
        <AddInventoryModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
