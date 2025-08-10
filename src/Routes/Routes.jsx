import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import UpcomingEvent from "../Pages/UpcomingEvent/UpcomingEvent";
import AuthLayout from "./../Layouts/AuthLayout";
import SignIn from "./../Pages/SignIn/SignIn";
import SignUp from "./../Pages/SignUp/SignUp";
import CreateEvent from "./../Pages/CreateEvent/CreateEvent";
import ManageEvent from "./../Pages/ManageEvent/ManageEvent";
import JoinedEvent from "../Pages/JoinedEvent/JoinedEvent";
import PrivateRoute from "./PrivateRoutes";
import EventDetails from "../Pages/EventDetails/EventDetails";
import UpdateEvent from "../Pages/UpdateEvent/UpdateEvent";
import Contact from "../Pages/Contact/Contact";
import Loading from "../Pages/Loading/Loading";
import PastEvents from "../Components/PastMainPage/PastEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      {
        path: "/upcoming-event",
        Component: UpcomingEvent,
        loader: async () => {
          const res = await fetch("https://ekattor-server-side.vercel.app/event-Data/upcoming");
          if (!res.ok) {
            throw new Response("Failed to fetch upcoming events", { status: res.status });
          }
          return res.json();
        },
        hydrateFallbackElement: <Loading />,  // Hydrate fallback UI
      }
      ,
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/past-event",
        Component: PastEvents,
      },
      {
        path: "/event-details/:id",
        element: (
          <PrivateRoute>
            <EventDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/create-event",
        element: (
          <PrivateRoute>
            <CreateEvent />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-event",
        element: (
          <PrivateRoute>
            <ManageEvent />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-event/:id",
        element: (
          <PrivateRoute>
            <UpdateEvent />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://ekattor-server-side.vercel.app/event-Data/${params.id}`).then(res => res.json()),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/joined-event",
        element: (
          <PrivateRoute>
            <JoinedEvent />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/signIn",
        Component: SignIn,
      },
      {
        path: "/auth/signUp",
        Component: SignUp,
      },
    ],
  },
]);
