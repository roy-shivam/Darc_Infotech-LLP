import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ScrollToTop from "../components/Utils/ScrollToTop.jsx";

export default function SiteLayout() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <ScrollToTop key={location.pathname} />
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
