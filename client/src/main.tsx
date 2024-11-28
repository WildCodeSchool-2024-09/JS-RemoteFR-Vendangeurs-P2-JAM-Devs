// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import AlbumDetails from "./pages/AlbumDetails";
import ArtistPage from "./pages/ArtistPage";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import PlaylistPage from "./pages/PlaylistPage";

/* ************************************************************************* */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "playlist/:id",
        element: <PlaylistPage />,
      },
      {
        path: "artist/:id",
        element: <ArtistPage />,
      },
      {
        path: "album/:id",
        element: <AlbumDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
