import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Flex justifyContent={'space-between'} p={4} direction={'row'}>
        <h1>Просмотр вакансий</h1>
        <Link to={'/analyser'}>Перейти к анализу вакансий</Link>
      </Flex>
    </div>
  );
};

export default Header;
