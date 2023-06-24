import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary, StoreProvider, ThemeProvider } from "app/providers";
import { App } from "app/App";
import "shared/config/i18n/i18n";
import "app/styles/index.scss";

const containerId = "root";
const container = document.getElementById(containerId);

if (!container) {
  throw new Error(`Can't find element with id "${containerId}"`);
}

const root = createRoot(container);

root.render(
  <Router>
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </Router>
);
