import { Footer, Header } from '../components/layout';
import { SearchResults } from '../components/results';
import styled from './BaseLayout.module.scss';


const BaseLayout = ({children}) => {
  return (
    <>
      <Header />
      <main className={styled.main}>
        <SearchResults />
        { children }
      </main>
      <Footer />
    </>
  )
};

export default BaseLayout;