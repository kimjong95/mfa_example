import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout";
import AppEdu from "./components/app-edu";
import AppJob from "./components/app-job";
import AppNetwork from "./components/app-network";
import AppPosting from "./components/app-posting";
import { Auth0ProviderWithNavigator } from "./components/auto0-provider-with-navigator";
import {
  appEduBasename,
  appJobBasename,
  appNetworkBasename,
  appPostingBasename,
} from "./constants/prefix";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0ProviderWithNavigator>
        <Layout />
      </Auth0ProviderWithNavigator>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={`${appPostingBasename}`} />,
      },
      {
        path: `${appPostingBasename}/*`,
        element: <AppPosting />,
      },
      {
        path: `${appEduBasename}/*`,
        element: <AppEdu />,
      },
      {
        path: `${appNetworkBasename}/*`,
        element: <AppNetwork />,
      },
      {
        path: `${appJobBasename}/*`,
        element: <AppJob />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}
