import getInventory from '../actions/getInventory';
import getProjects from '../actions/getProjects';
import ClientOnly from '../components/ClientOnly';
import Container from '../components/Container';
import PaginationControls from '../components/inventory/PaginationControls';
import ProductListRow from '../components/inventory/ProductListRow';
import ProductList from '../components/modals/ProductList';
import ProjectTable from '../components/project/projectTable/ProjectTable';
import ProjectTableRow from '../components/project/projectTable/ProjectTableRow';
import ProjectClient from './ProjectClient';

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const projects = await getProjects();
  const inventory = await getInventory();

  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '10';

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = inventory.slice(start, end);

  return (
    <ClientOnly>
      <ProductList>
        {entries.map((el) => (
          <ProductListRow
            productId={el.id}
            productName={el.productName}
            productDescription={el.productDescription}
          />
        ))}
      </ProductList>
      <Container>
        <div className="pt-28">
          <ProjectClient>
            <ProjectTable>
              {projects.map((project) => (
                <ProjectTableRow
                  projectName={project.projectName}
                  projectDescription={project.projectDescription}
                  projectId={project.id}
                />
              ))}
            </ProjectTable>
          </ProjectClient>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default page;
