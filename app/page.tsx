import { data } from 'autoprefixer';
import getInventory from './actions/getInventory';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import InventoryTable from './components/inventory/InventoryTable';
import PaginationControls from './components/inventory/PaginationControls';
import TableRow from './components/inventory/TableRow';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const inventory = await getInventory();

  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '10';

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = inventory.slice(start, end);

  return (
    <ClientOnly>
      <Container>
        <div className="pt-32">
          <InventoryTable>
            {entries.map((el) => (
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
            <PaginationControls
              hasNextPage={end < inventory.length}
              hasPrevPage={start > 0}
              inventoryNumber={inventory.length}
            />
          </InventoryTable>
        </div>
      </Container>
    </ClientOnly>
  );
}
