import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import RootLayout from "./layout/RootLayout";
import EventLayout from "./layout/EventsLayout";

// Pages
import NotFound from "./pages/NotFound";
import Home, { eventLoader } from "./home/Home";
import EventDetails, { eventLoaderDetails } from "./events/EventDetails";
import Event from "./events/Events";
import Create from "./auth/Create";
import Dashboard from "./pages/Dashboard";
import Profile from "./user/Profile";
import EventsError from "./events/EventsError";

// Define routes and router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Home Page */}
      <Route
        index
        loader={eventLoader}
        errorElement={<EventsError />}
        element={<Home />}
      />
      
      {/* Events Pages */}
      <Route path="events" element={<EventLayout />}>
        <Route index loader={eventLoader} element={<Event />} />
        <Route
          path=":id"
          loader={eventLoaderDetails}
          errorElement={<EventsError />}
          element={<EventDetails />}
        />
      </Route>

      {/* Other Pages */}
      <Route path="create" element={<Create />} />
      <Route
        path="dashboard"
        loader={eventLoader}
        element={<Dashboard />}
      />
      <Route path="profile" element={<Profile />} />

      {/* Not Found Page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
