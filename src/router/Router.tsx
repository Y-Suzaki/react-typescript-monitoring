import { memo, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Setting } from '../components/pages/Setting';
import { NotFound } from '../components/pages/NotFound';

import { PrivateRouter } from './PrivateRouter';
import { useAuth } from '../hooks/useAuth';
import { useAuthSession } from '../hooks/useAuthSession';
import { LoadingSpinner } from '../components/atoms/spinner/LoadingSpinner';

export const Router = function Router() {
  const { isAuthenticated, isLoading } = useAuth();
  const { authSession } = useAuthSession();
  console.log(`Public Router: ${isAuthenticated}, ${isLoading}`);

  useEffect(() => {
    (async () => {
      await authSession();
    })();
  }, []);

  return (
    <Routes>
      {!isLoading ? (
        <>
          <Route path={'/'} element={<Login />} />
          {isAuthenticated ? (
            <Route path={'/home/*'} element={<Homes isAuthenticated={isAuthenticated} />} />
          ) : (
            <Route path={'/home/*'} element={<Navigate to="/" />} />
          )}

          <Route path={'*'} element={<NotFound />} />
        </>
      ) : (
        <Route path={'*'} element={<LoadingSpinner />} />
      )}
    </Routes>
  );
};

const Homes = memo(function Homes(props: { isAuthenticated: boolean }) {
  const { isAuthenticated } = props;
  console.log(`Homes: Router. ${isAuthenticated}`);
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <PrivateRouter isAuthenticated={isAuthenticated}>
            <Home />
          </PrivateRouter>
        }
      />

      <Route
        path={'/location'}
        element={
          <PrivateRouter isAuthenticated={isAuthenticated}>
            <Setting />
          </PrivateRouter>
        }
      />
      <Route
        path={'/event'}
        element={
          <PrivateRouter isAuthenticated={isAuthenticated}>
            <Setting />
          </PrivateRouter>
        }
      />
      <Route
        path={'/setting'}
        element={
          <PrivateRouter isAuthenticated={isAuthenticated}>
            <Setting />
          </PrivateRouter>
        }
      />

      {/*<Route path={'/user_management'} element={<UserManagement />} />*/}
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
  // return loginUser ? (
  //   <Routes>
  //     <Route path={'/'} element={<Home />} />
  //     <Route path={'/setting'} element={<Setting />} />
  //     <Route path={'/user_management'} element={<UserManagement />} />
  //     <Route path={'*'} element={<NotFound />} />
  //   </Routes>
  // ) : (
  //   <>
  //     <Navigate to="/" />
  //   </>
  // );
});
