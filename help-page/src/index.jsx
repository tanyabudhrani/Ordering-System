import React from "react";
import ReactDOMClient from "react-dom/client";
import { Help } from "./screens/Help";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Help />);
