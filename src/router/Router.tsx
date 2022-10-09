import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';

export const Router = memo(function Router() {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/home/*'} element={<Homes />} />
    </Routes>
  );
});

const Homes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/setting'} element={<Setting />} />
      <Route path={'/user_management'} element={<UserManagement />} />
    </Routes>
  );
};
