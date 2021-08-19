import { BaseLayout } from '../layouts';
import { Popular, Trailers, Trending } from '../components/layout';
import { ThemeProvider } from '../context/theme';

const HomePage = () => {
  return (
    <ThemeProvider>
      <BaseLayout>
        <p>HOME PAGE</p>
        <Popular />
        <Trailers />
        <Trending />
      </BaseLayout>
    </ThemeProvider>
    
  );
};

export default HomePage;