import { useEffect } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import "./App.css";
import ScriptsLoader from "./Hook/ScriptsLoader";
import AppWrapper from "./Components/AppWrapper";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error";
import ContactUs from "./Pages/Contact/ContactUs";
import Help from "./Pages/Help/Help";
import Onboarding from "./Pages/Onboarding/Onboarding";
import Livenesscheck from "./Pages/Onboarding/Livenesscheck";
import Finish from "./Pages/Onboarding/Finish";
import DataSafety from "./Pages/DataSafety/DataSafety";
import GeneralFAQ from "./Pages/FAQ/GeneralFAQ";
import OnboardingFAQ from "./Pages/FAQ/OnboardingFAQ";
import CookiePolicy from "./Pages/CookiePolicy/CookiePolicy";
import ComplaintPolicy from "./Pages/ComplaintPolicy/ComplaintPolicy";

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
          <Route path="/*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/onboarding-faq" element={<OnboardingFAQ />} />
          <Route path="/general-faq" element={<GeneralFAQ />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/livenesscheck" element={<Livenesscheck />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/data-safety" element={<DataSafety />} />

          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/complaint-policy" element={<ComplaintPolicy />} />
          {/* 
          <Route path="/terms-and-conditions" element={<TermsandConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/money-transfer" element={<MoneyTransfer />} />  */}
        </RouterRoutes>
      </AppWrapper>
    </>
  );
}

export default App;
