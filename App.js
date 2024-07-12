import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Error, Body, AppLayout, Restmenu } from "./components";
import { lazy, Suspense } from "react";
const Grocery = lazy(() => import("./components/grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/restaurants/:resid",
        element: <Restmenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); //this is what isshowing on scren,function from the react-dom library
root.render(
  <>
    <RouterProvider router={appRouter}></RouterProvider>
  </>
);
