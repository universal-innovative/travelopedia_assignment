import { useRoutes } from 'react-router-dom';

// ----------------Routes ------------------//

import { MainLayout } from './layout';
import { Page1, Page2} from './pages';

// --------------------------Routing Object------------------------------- //

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: 'page-1', element: <Page1 /> },
        { path: 'page-2', element: <Page2 /> },
      
      ],
    },
  ]);
}
