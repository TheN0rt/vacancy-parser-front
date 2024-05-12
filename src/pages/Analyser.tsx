import { Box } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { Vacancy } from '../types/Vacancy';
import { Index as Table } from '../components/Table';

const Analyser = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const analyseObj = useMemo(() => {
    const obj: any = {};
    vacancies.forEach((vacancy) => {
      const { hardSkills } = vacancy;
      if (!hardSkills) return;
      hardSkills.forEach((hardSkill: string) => {
        if (obj[hardSkill]) {
          obj[hardSkill] += 1;
        } else {
          obj[hardSkill] = 1;
        }
      });
    });
    return obj;
  }, [vacancies]);

  useEffect(() => {
    setIsLoading(true);
    getHardSkills();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const getHardSkills = async () => {
    const res = await fetch('http://localhost:8080/vacancies/hardSkills/', {
      mode: 'cors',
    });
    const data = await res.json();
    setVacancies(data.data);
  };

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <Box>
      <h1 style={{ fontSize: '22px', margin: '20px 0 20px 20px' }}>Анализ вакансий</h1>
      <Table analyseObj={analyseObj}>
        <></>
      </Table>
    </Box>
  );
};

export default Analyser;
