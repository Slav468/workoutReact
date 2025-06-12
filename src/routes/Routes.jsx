import { BrowserRouter, Route, Routes } from 'react-router';
import NotFound from '../components/screens/not-found/NotFound';
import { useAuth } from '../hooks/useAuth';

const Router = ({ routers }) => {
  const { isAuth } = useAuth();

  const { routes } = routers;

  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: Auth routes */}

        {routes.map((route) => {
          if (route.isAuth && !isAuth) {
            return false;
          } else {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.auth ? isAuth : <route.component />}
              />
            );
          }
        })}
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
