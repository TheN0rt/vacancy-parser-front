import { Vacancy } from '../types/Vacancy';
import { Box, Flex } from '@chakra-ui/react';

const hStyle: React.CSSProperties = {
  color: 'rgb(77, 182, 172)',
  fontWeight: 'bold',
  fontSize: '22px',
  // marginBottom: '10px',
};

const Card: React.FC<{ vacancy: Vacancy }> = ({ vacancy }) => {
  return (
    <Box
      bgColor={'white'}
      p={4}
      border={'1px'}
      borderColor={'teal.500'}
      borderRadius={'10px'}
      marginBottom={2}
      minW={'80%'}
      maxW={'80%'}>
      <a href={vacancy.link}>
        <h4 style={hStyle}>{vacancy.title ? vacancy.title : 'Название вакансии не указано'}</h4>
      </a>
      <p style={{ marginBottom: '10px' }}>{vacancy.location}</p>
      <p style={{ marginBottom: '10px' }}>
        Опыт работы: {vacancy.experience.length > 0 ? vacancy.experience : 'Не указан'}
      </p>
      <p style={{ marginBottom: '10px' }}>
        Зарплата: {vacancy.salary.length > 0 ? vacancy.salary : 'Не указана'}
      </p>
      <Flex flexWrap={'wrap'} gap={2} w={'60%'}>
        {vacancy.hardSkills?.length > 0 ? (
          vacancy.hardSkills.map((skill: string, id: number) => (
            <Box bg={'teal.500'} color={'white'} borderRadius={'10px'} p={2} mr={2} key={skill}>
              {skill}
            </Box>
          ))
        ) : (
          <p>Ключевые навыки: Не указаны</p>
        )}
      </Flex>
      <p style={{ margin: '10px 0 10px' }}>
        Компания: {vacancy.company.length > 0 ? vacancy.company : 'Компания не указана'}
      </p>
      <p>Вакансия размещена на сайте: {vacancy?.site}</p>
      <p>Дата размещения вакансии на сайте: {vacancy?.date?.toLocaleString()}</p>
    </Box>
  );
};

export default Card;
