import getInventory from '../actions/getInventory';
import getProjects from '../actions/getProjects';
import ClientOnly from '../components/ClientOnly';
import Container from '../components/Container';
import ProductListRow from '../components/inventory/ProductListRow';
import ProductList from '../components/modals/ProductList';
import ProjectTable from '../components/project/projectTable/ProjectTable';
import ProjectTableRow from '../components/project/projectTable/ProjectTableRow';
import ProjectClient from './ProjectClient';

const page = async () => {
  const projects = await getProjects();
  const inventory = await getInventory();

  return (
    <ClientOnly>
      {/* the modal */}
      <ProductList>
        {inventory.map((el) => (
          <ProductListRow
            key={el.id}
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
                  key={project.id}
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
