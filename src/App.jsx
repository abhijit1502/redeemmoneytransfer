import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Seo from "./Components/Seo";
import {
  homeSeo,
  aboutSeo,
  contactSeo,
  helpSeo,
  onboardingSeo,
  livenessCheckSeo,
  dataSafetySeo,
  generalFaqSeo,
  onboardingFaqSeo,
  cookiePolicySeo,
  complaintPolicySeo,
  privacyPolicySeo,
  termsConditionsSeo,
  moneyTransferSeo,
  finishSeo
} from "./seo-configs";
import Preloader from "./Components/Preloader";
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
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsandConditions from "./Pages/TermsandConditions/TermsandConditions";
import AboutUs from "./Pages/About/AboutUs";
import MoneyTransfer from "./Pages/MoneyTransfer/MoneyTransfer";
import ScriptsLoader from "./Hook/ScriptsLoader";
import AppWrapper from "./Components/AppWrapper";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (window.initThemeScripts) window.initThemeScripts();
      if (window.initGsapScripts) window.initGsapScripts();
    }
  }, [isLoading]);

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
          window.location.reload();
        }
      }); 
  }, []);

  return (
    <>
      <ScriptsLoader />
      <AppWrapper>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Routes>
              <Route path="/*" element={<><Seo title="Page Not Found" /><Error /></>} />
              <Route path="/" element={<><Seo {...homeSeo} /><Home /></>} />
              <Route path="/contactus" element={<><Seo {...contactSeo} /><ContactUs /></>} />
              <Route path="/help" element={<><Seo {...helpSeo} /><Help /></>} />
              <Route path="/aboutus" element={<><Seo {...aboutSeo} /><AboutUs /></>} />
              <Route path="/onboarding-faq" element={<><Seo {...onboardingFaqSeo} /><OnboardingFAQ /></>} />
              <Route path="/general-faq" element={<><Seo {...generalFaqSeo} /><GeneralFAQ /></>} />
              <Route path="/onboarding" element={<><Seo {...onboardingSeo} /><Onboarding /></>} />
              <Route path="/livenesscheck" element={<><Seo {...livenessCheckSeo} /><Livenesscheck /></>} />
              <Route path="/finish" element={<><Seo {...finishSeo} /><Finish /></>} />
              <Route path="/data-safety" element={<><Seo {...dataSafetySeo} /><DataSafety /></>} />
              <Route path="/cookie-policy" element={<><Seo {...cookiePolicySeo} /><CookiePolicy /></>} />
              <Route path="/complaint-policy" element={<><Seo {...complaintPolicySeo} /><ComplaintPolicy /></>} />
              <Route path="/privacy-policy" element={<><Seo {...privacyPolicySeo} /><PrivacyPolicy /></>} />
              <Route path="/terms-and-conditions" element={<><Seo {...termsConditionsSeo} /><TermsandConditions /></>} />
              <Route path="/money-transfer" element={<><Seo {...moneyTransferSeo} /><MoneyTransfer /></>} />
            </Routes>
          </>
        )}
      </AppWrapper>
    </>
  );
}

export default App;