import {render} from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary, ThemeProvider } from "app/providers";
import { App } from "app/App";
import "shared/config/i18n/i18n";

render(
  <Router>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </Router>,
  document.getElementById("root"),
);
