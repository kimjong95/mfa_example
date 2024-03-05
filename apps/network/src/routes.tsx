import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import { type RouteObject } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "./components/Layout";
import PageHome from "./pages/page-home";
import Auth0ClientProvider from "./providers/auto0-client-provider";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RecoilRoot>
        <Auth0ClientProvider>
          <Layout>
            <AppRoutingManager type="app-network" />
          </Layout>
        </Auth0ClientProvider>
      </RecoilRoot>
    ),
    errorElement: <div>App Network Error</div>,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
    ],
  },
];
