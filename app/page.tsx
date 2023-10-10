import Container from './components/Container';
import InventoryItem from './components/InventoryItem';

export default function Home() {
  return (
    <Container>
      <div className="pt-32">
        <InventoryItem />
      </div>
    </Container>
  );
}
