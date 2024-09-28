import React from "react";
import ReactDOMClient from "react-dom/client";
import { FastFood } from "./screens/FastFood";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FastFood />);
