import { MainPage } from 'src/pages/MainPage/MainPage';
import { ResultPage } from 'src/pages/ResultPage/ResultPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "result",
      element: <ResultPage />,
    },
  ]);