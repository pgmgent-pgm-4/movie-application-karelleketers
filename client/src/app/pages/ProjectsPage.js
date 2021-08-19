import { BaseLayout } from '../layouts';
import { ThemeProvider } from '../context/theme';
import { FilterResults } from '../components/results';

const ProjectsPage = () => {
  return (
    <ThemeProvider>
       <BaseLayout>
        <p>FILMS AND SERIES</p>
        <FilterResults />
      </BaseLayout>
    </ThemeProvider>
  );
};

export default ProjectsPage;