import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import { Vacancy } from '../types/Vacancy';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

const Home: React.FC = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalVacanciesCount, setTotalVacanciesCount] = useState(0);

  useEffect(() => {
    getTotalVacanciesCount();
    GetVacancies();
  }, [currentPage]);

  const GetVacancies = async () => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:8080/vacancies/${currentPage}/20/`, {
      mode: 'cors',
    });
    const data = await res.json();
    setVacancies(data.data);
    setIsLoading(false);
  };

  const getTotalVacanciesCount = async () => {
    const res = await fetch(`http://localhost:8080/vacancies/count/`, {
      mode: 'cors',
    });
    const data = await res.json();
    setTotalVacanciesCount(data.data);
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'300px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'>
      <GridItem pl='2' bg='orange.300' area={'header'}>
        <Header />
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='white' area={'main'}>
        <CardList vacancies={vacancies} isLoading={isLoading} totalCount={totalVacanciesCount} />
        <Pagination
          currentPage={currentPage}
          refreshCurrentPage={changePage}
          totalPages={Math.ceil(totalVacanciesCount / 20)}
        />
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default Home;
