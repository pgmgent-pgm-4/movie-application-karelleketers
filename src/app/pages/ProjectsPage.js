import { BaseLayout } from '../layouts';
import { Popular, Upcoming, BestRated } from '../components/layout';
import { ThemeProvider } from '../context';

const ProjectsPage = () => {
  return (
    <ThemeProvider>
       <BaseLayout>
        <p>FILMS AND SERIES</p>
        <Popular />
        <Upcoming />
        <BestRated />
      </BaseLayout>
    </ThemeProvider>
  );
};

export default ProjectsPage;