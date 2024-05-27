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