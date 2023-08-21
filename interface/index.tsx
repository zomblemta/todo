import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from './app/index'


export const Interface = () => {
    const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
};
