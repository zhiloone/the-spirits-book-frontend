import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { CustomAppShell } from './components/CustomAppShell/CustomAppShell';
import { QuestionOfTheDayPage } from './pages/QuestionOfTheDay/QuestionOfTheDay.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CustomAppShell />,
    children: [
      {
        index: true,
        element: <QuestionOfTheDayPage />,
      }
    ]
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
