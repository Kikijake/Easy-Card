import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Router />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
