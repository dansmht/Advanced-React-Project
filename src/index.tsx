import {render} from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { App } from "app/App";

render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
