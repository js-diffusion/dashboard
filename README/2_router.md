## 기본 프로젝트 설치 후 dashboard 개발

1. router 추가

```bash
yarn add react-router-dom
```

```tsx
// routes.tsx
import MainPage from '@/pages/main';
import LoginPage from '@/pages/sign/login';
import SignupPage from '@/pages/sign/signup';
import SettingsPage from '@/pages/settings/index';
import KicoxDataListPage from '@/pages/kicoxData/list';
import KicoxDataAddPage from '@/pages/kicoxData/add';
import KicoxDataEditPage from '@/pages/kicoxData/edit';

export const routes = [
  { path: "/", component: MainPage, label: "main" },
  { path: "/sign/login", component: LoginPage, label: "login" },
  { path: "/sign/signup", component: SignupPage, label: "signup" },
  { path: "/settings", component: SettingsPage, label: "settings" },
  { path: "/kicox-data/list", component: KicoxDataListPage, label: "kicox data list" },
  { path: "/kicox-data/add", component: KicoxDataAddPage, label: "kicox data add" },
  { path: "/kicox-data/edit", component: KicoxDataEditPage, label: "kicox data edit" }
];


// app.tsx
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

// header.tsx
import { Link } from "react-router-dom"
import { routes } from "@/router/routes"

export const Header = () => {
  return (
    <header>
      <nav>
        {routes.map(route => (
          <Link key={route.path} to={route.path}>{route.label}</Link>
        ))}
      </nav>
    </header>
  )
}
```

