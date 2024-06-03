import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import { MainScreen } from '@/routes/Main/Main.screen.tsx';

const RedirectToMain = () => {
  return <Navigate to={'/'} replace />;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainScreen />,
  },
  {
    path: '/*',
    element: <RedirectToMain />,
  },
];

export const appRouter = createBrowserRouter(routes);
