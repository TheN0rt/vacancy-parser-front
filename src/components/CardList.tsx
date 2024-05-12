import React from 'react';
import Card from './Card';
import { Vacancy } from '../types/Vacancy';
import { Flex } from '@chakra-ui/react';

const CardList: React.FC<{ vacancies: Vacancy[]; isLoading: boolean; totalCount: number }> = ({
  vacancies,
  isLoading,
  totalCount,
}) => {
  return (
    <div>
      {!isLoading ? (
        <>
          <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Найдено вакансий: {totalCount}</h2>
          <Flex flexDirection={'column'} alignItems={'center'}>
            {vacancies.map((vacancy: any) => (
              <Card key={vacancy.id} vacancy={vacancy} />
            ))}
          </Flex>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardList;
