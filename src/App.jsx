import { useEffect } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import "./App.css";
import ScriptsLoader from "./Hook/ScriptsLoader";
import AppWrapper from "./Components/AppWrapper";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error";

function App() {
  useEffect(() => {
    fetch("/version.json")
      .then((res) => res.json())
      .then((data) => {
        const storedVersion = localStorage.getItem("app_version");
        if (storedVersion !== data.version) {
          localStorage.setItem("app_version", data.version);
          if ("caches" in window) {
            caches.keys().then((names) => names.forEach((name) => caches.delete(name)));
          }
          if ("serviceWorker" in navigator) {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
              for (let registration of registrations) {
                registration.unregister();
              }
            });
          }
          window.location.reload(true);
        }
      });
  }, []);

  return (
    <>
      <ScriptsLoader />
      <AppWrapper>
        <RouterRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </RouterRoutes>
      </AppWrapper>
    </>
  );
}

export default App;
