import { Footer, Header } from '../components/layout';
/* import { FilterableResults } from '../components/results'; */
import styled from './BaseLayout.module.scss';
import { FilterableResults} from '../components/results';

const BaseLayout = ({children}) => {
  return (
    <>
      <Header />
      <main className={styled.main}>
        <FilterableResults />
        { children }
      </main>
      <Footer />
    </>
  )
};

export default BaseLayout;