import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      {/* Header Section */}
      <header className="header p-6 bg-gray-800 text-gray-100">
        <h1 className="text-3xl font-bold text-yellow-400 text-center">Event Management</h1>
        <nav className="navigation flex justify-center mt-4 space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active text-yellow-500" // Highlight active link
                : "nav-link text-gray-200 hover:text-yellow-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="events"
            className={({ isActive }) =>
              isActive
                ? "nav-link active text-yellow-500"
                : "nav-link text-gray-200 hover:text-yellow-500"
            }
          >
            Events
          </NavLink>
          <NavLink
            to="create"
            className={({ isActive }) =>
              isActive
                ? "nav-link active text-yellow-500"
                : "nav-link text-gray-200 hover:text-yellow-500"
            }
          >
            Create Event
          </NavLink>
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              isActive
                ? "nav-link active text-yellow-500"
                : "nav-link text-gray-200 hover:text-yellow-500"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive
                ? "nav-link active text-yellow-500"
                : "nav-link text-gray-200 hover:text-yellow-500"
            }
          >
            Profile
          </NavLink>
        </nav>
      </header>

      {/* Outlet Section for Routing */}
      <main className="content p-8">
        <Outlet />
      </main>
    </div>
  );
}
