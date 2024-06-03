import { RouterProvider } from 'react-router-dom';
import { AppStyle } from '@/styles/AppStyle';
import { appRouter } from '@/routes/routes.tsx';

function App() {
  return (
    <>
      <AppStyle />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
