import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
const App: React.FC = () => {
  const AnaliserPage = lazy(() => import('./pages/Analyser'));
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='analiser' element={<AnaliserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
