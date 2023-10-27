import {
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";

import Layout from "layout";
import SplashPage from "routes/Splash";

export const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <ScrollRestoration />
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <SplashPage />,
      },
    ],
  },
]);
