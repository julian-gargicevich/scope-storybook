import {
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";

import Navigation from "components/Navigation";
import Layout from "layout";
import SplashPage from "routes/Splash";

export const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Navigation />
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
