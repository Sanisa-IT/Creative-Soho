import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { EventDetails } from "./pages/EventDetails";
import { SpeakerProfile } from "./pages/SpeakerProfile";
import { Dashboard } from "./pages/Dashboard";
import { Community } from "./pages/Community";
import { About } from "./pages/About";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "events", Component: Events },
      { path: "events/:id", Component: EventDetails },
      { path: "speakers", Component: SpeakerProfile },
      { path: "speakers/:id", Component: SpeakerProfile },
      {path: "community", Component: Community },
      { path: "about", Component: About },
      { path: "contact", Component: Home },
      { path: "dashboard", Component: Dashboard },
    ],
  },
]);
