// @refresh reload
import { MetaProvider, Title, Link } from "@solidjs/meta";
import { createSignal, Suspense } from "solid-js";
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import "./app.css";
import CompB from "./components/CompB";

export const [appProp, setAppProp] = createSignal(true);

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>solid_error_demo</Title>

          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={"anonymous"} />
          <Link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

          <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

          <Suspense>
            <div id="mobileContainer" classList={{ mobile: appProp() }}>
              <A href="/">Home</A>
              <A href="/otherpage">Page 2</A>
              <CompB />
              {props.children}
            </div>
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
