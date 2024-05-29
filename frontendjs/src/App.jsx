import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from '@/router/routes';
import { Layout } from './components/layout';

export default function App() {
  const pagePath1 = ''
  const pagePath2 = ''
  const pagePath3 = ''

  return (
    <BrowserRouter>
      <Layout pagePath1={pagePath1} pagePath2={pagePath2} pagePath3={pagePath3}>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}