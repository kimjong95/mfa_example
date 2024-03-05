import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import { type RouteObject } from "react-router-dom";
import Layout from "./components/layout";
import Auth0ClientProvider from "./providers/auto0-client-provider";

import PageDetail from "./pages/page-detail";
import PageList from "./pages/page-list";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <Layout>
          <AppRoutingManager type="app-edu" />
        </Layout>
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Edu Error</div>,
    children: [
      {
        index: true,
        element: <PageList />,
      },
      {
        path: ":id",
        element: <PageDetail />,
      },
    ],
  },
];
