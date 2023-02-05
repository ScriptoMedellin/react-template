import { App, Public, Auth, Home, NotFound } from '../pages';

export const publicRoutes = [
  {
    path: '/',
    element: <Public />,
    children: [
      {
        path: '*',
        element: <Home />,
        index: true,
      },
      {
        path: 'login',
        element: <Auth />,
      },
    ],
  },
];

export const privateRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <div>Dashboard</div>,
        index: true,
      },
      {
        path: "about",
        element: <div>About Us</div>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  }
];