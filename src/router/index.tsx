import { useRoutes, Navigate } from "react-router-dom"
import React, { ReactElement, Suspense } from "react"

const HomePage = React.lazy(() => import("../pages/Home"))
const LoginPage = React.lazy(() => import("../pages/Login"))
const SignUpPage = React.lazy(() => import("../pages/SignUp"))
const OverviewPage = React.lazy(() => import("../pages/Overview"))

export const RouterMap = (): ReactElement | null =>
  useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <Suspense>
          <SignUpPage />
        </Suspense>
      ),
    },
    {
      path: "/overview",
      element: (
        <Suspense>
          <OverviewPage />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ])
