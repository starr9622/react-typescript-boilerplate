import * as React from "react";
import { render } from "react-dom";

import Hello from "./components/Hello";

const root = document.querySelector("#root");

render(<Hello name="React~~!" />, root);
