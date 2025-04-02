import { ComponentType, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import { CssBaseline } from "@mui/material";

import "./global.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <RecoilRoot>
            <>
              <CssBaseline />
                <Suspense>
                  <App />
                </Suspense>
            </>
      </RecoilRoot>
    </StrictMode>
  );
}

export default render;
