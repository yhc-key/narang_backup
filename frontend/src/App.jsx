import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import SearchPage from "./pages/Search";
import PlanningPage from "./pages/Planning";
import ApplicantList from "./pages/ApplicantList";
import WritePage from "./pages/Write";
import ChatPage from "./pages/Chat";
import ChatRoomPage from "./pages/ChatRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "write",
        element: <WritePage />
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "ApplicantList",
        element: <ApplicantList />,
      },
      {
        path: "planning",
        element: <PlanningPage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
        
      },
      {
        path: "chat/room",
        element: <ChatRoomPage/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;