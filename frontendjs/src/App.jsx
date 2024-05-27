import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from '@/router/routes';
import { Header } from '@/components/header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}