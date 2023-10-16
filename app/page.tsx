import Container from './components/Container';
import InventoryDash from './components/inventory/InventoryDash';
import InventoryItem from './components/inventory/InventoryItem';

export default function Home() {
  return (
    <Container>
      <div className="pt-32">
        <InventoryDash />
      </div>
    </Container>
  );
}
