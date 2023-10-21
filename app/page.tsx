import getInventory from './actions/getInventory';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import InventoryTable from './components/inventory/InventoryTable';
import TableRow from './components/inventory/TableRow';

export default async function Home() {
  const inventory = await getInventory();

  return (
    <ClientOnly>
      <Container>
        <div className="pt-32">
          <InventoryTable>
            {inventory.map((el) => (
              <TableRow
                productBrand={el.productBrand?.toString()}
                productName={el.productName}
                productDescription={el.productDescription?.toString()}
                productCategory={el.productCategory?.toString()}
                productPrice={el.productPrice}
                productLocation={el.location?.toString()}
                totalQty={el.totalQty}
              />
            ))}
          </InventoryTable>
        </div>
      </Container>
    </ClientOnly>
  );
}
