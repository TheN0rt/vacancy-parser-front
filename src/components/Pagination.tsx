import { Button, Stack } from '@chakra-ui/react';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  refreshCurrentPage: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, refreshCurrentPage, totalPages }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    refreshCurrentPage(page);
  };

  let pageSlice = pageNumbers.slice(currentPage - 1, currentPage + 9);

  if (pageSlice.length < 10) {
    pageSlice = pageNumbers.slice(-10);
  }

  return (
    <Stack direction='row' spacing={2} align={'center'} mt={4} mb={4} justifyContent={'center'}>
      <Button
        disabled={currentPage === 1}
        colorScheme='teal'
        variant={'outline'}
        _hover={{ bg: 'teal.500', color: 'white' }}
        onClick={() => handlePageChange(currentPage - 1)}>
        Назад
      </Button>
      {pageSlice[0] === 1 ? null : (
        <>
          <Button
            colorScheme='teal'
            variant={'outline'}
            _hover={{ bg: 'teal.500', color: 'white' }}
            onClick={() => handlePageChange(1)}>
            1
          </Button>
          {pageSlice[0] > 2 && <span>...</span>}
        </>
      )}
      {pageSlice.map((pageNumber) => (
        <Button
          colorScheme='teal'
          variant={pageNumber === currentPage ? 'solid' : 'outline'}
          key={pageNumber}
          _hover={{ bg: 'teal.500', color: 'white' }}
          onClick={() => handlePageChange(pageNumber)}
          disabled={pageNumber === currentPage}>
          {pageNumber}
        </Button>
      ))}
      {pageSlice[pageSlice.length - 1] === totalPages ? null : (
        <>
          <span>...</span>
          <Button
            colorScheme='teal'
            variant={'outline'}
            _hover={{ bg: 'teal.500', color: 'white' }}
            onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </Button>
        </>
      )}
      <Button
        colorScheme='teal'
        variant={'outline'}
        _hover={{ bg: 'teal.500', color: 'white' }}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Вперёд
      </Button>
    </Stack>
  );
};

export default Pagination;
