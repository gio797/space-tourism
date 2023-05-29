import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";

import DestinationLayout from "./components/DestinationLayout";
import CrewLayout from "./components/CrewLayout";
import TechnologyLayout from "./components/TechnologyLayout";
import Moon from "./pages/Moon";
import Mars from "./pages/Mars";
import Europa from "./pages/Europa";
import Titan from "./pages/Titan";
import Douglas from "./pages/Douglas";
import Mark from "./pages/Mark";
import Victor from "./pages/Victor";
import Anousheh from "./pages/Anousheh";
import LaunchVehicle from "./pages/LaunchVehicle";
import Spaceport from "./pages/Spaceport";
import SpaceCapsule from "./pages/SpaceCapsule";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="destination" element={<DestinationLayout />}>
        <Route index element={<Moon />} />
        <Route path="mars" element={<Mars />} />
        <Route path="europa" element={<Europa />} />
        <Route path="titan" element={<Titan />} />
      </Route>
      <Route path="crew" element={<CrewLayout />}>
        <Route index element={<Douglas />} />
        <Route path="mark" element={<Mark />} />
        <Route path="victor" element={<Victor />} />
        <Route path="anousheh" element={<Anousheh />} />
      </Route>
      <Route path="technology" element={<TechnologyLayout />}>
        <Route index element={<LaunchVehicle />} />
        <Route path="spaceport" element={<Spaceport />} />
        <Route path="spacecapsule" element={<SpaceCapsule />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
