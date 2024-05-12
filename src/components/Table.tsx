import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Pagination from './Pagination';
import { useSort } from '../customHooks/useSort';

const limit = 15;

const ThStyles: React.CSSProperties = {
  cursor: 'pointer',
};

export const Index: React.FC<{
  children: React.ReactNode;
  analyseObj: { [key: string]: number };
}> = ({ children = <></>, analyseObj }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortedArr, setSortedArr] = useSort(analyseObj);
  const [tableArr, setTableArr] = useState<string[]>([]);

  useEffect(() => {
    setTableArr(sortedArr.slice((currentPage - 1) * limit, currentPage * limit));
  }, [sortedArr, currentPage]);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const sortTable = (type: 'number' | 'string') => {
    setSortedArr(type);
  };

  return (
    <Box>
      {children}
      <TableContainer
        maxW={'80%'}
        maxH={'80%'}
        margin={'0 auto'}
        border={'1px'}
        borderColor={'teal.500'}
        borderRadius={'10px'}>
        <Table variant='simple'>
          <TableCaption placement='top'>Таблица ключевых навыков</TableCaption>
          <Thead>
            <Tr>
              <Th style={ThStyles} onClick={() => sortTable('string')}>
                Название навыка
              </Th>
              <Th isNumeric style={ThStyles} onClick={() => sortTable('number')}>
                Количество упоминаний в вакансиях
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableArr.length > 0 ? (
              tableArr.map((key) => (
                <Tr key={key}>
                  <Td>{key}</Td>
                  <Td isNumeric>{analyseObj[key]}</Td>
                </Tr>
              ))
            ) : (
              <p>Ничего не найдено</p>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
        currentPage={currentPage}
        refreshCurrentPage={changePage}
        totalPages={Math.ceil(Object.keys(analyseObj).length / limit)}
      />
    </Box>
  );
};
