import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import { type RouteObject } from "react-router-dom";
import PageHome from "./pages/page-home";
import Auth0ClientProvider from "./providers/auto0-client-provider";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <AppRoutingManager type="app-posting" />
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Posting Error</div>,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
    ],
  },
];
