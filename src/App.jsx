import { Route, Routes } from "react-router-dom";
import SiteLayout from "./layout/SiteLayout.jsx";

import Home from "./pages/Home.jsx";
import Workshops from "./pages/Workshops.jsx";
import Courses from "./pages/Courses.jsx";
import Training from "./pages/Training.jsx";
import Reviews from "./pages/Reviews.jsx";
import Contact from "./pages/Contact.jsx";
import Enroll from "./pages/Enroll.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/training" element={<Training />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
