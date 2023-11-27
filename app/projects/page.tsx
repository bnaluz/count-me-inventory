import getProjects from '../actions/getProjects';
import ClientOnly from '../components/ClientOnly';
import Container from '../components/Container';
import ProjectTable from '../components/project/projectTable/ProjectTable';
import ProjectTableRow from '../components/project/projectTable/ProjectTableRow';
import ProjectClient from './ProjectClient';

const page = async () => {
  const projects = await getProjects();

  return (
    <ClientOnly>
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
