import React from "react";
import {
  AppRoutingManager,
  Auth0ClientProvider,
} from "@career-up/shell-router";
import { Provider } from "react-redux";
import { type RouteObject } from "react-router-dom";
import Layout from "./components/layout";
import PageDetail from "./pages/page-detail";
import PageList from "./pages/page-list";
import create from "./redux/create";

const store = create();

const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;
const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL!;

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Auth0ClientProvider options={{ domain, clientId, redirectUri }}>
          <Layout>
            <AppRoutingManager type="app-job" />
          </Layout>
        </Auth0ClientProvider>
      </Provider>
    ),
    errorElement: <div>App Job Error</div>,
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
