import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Page/About";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Women from "./Page/Women";
import Men from "./Page/Men";
import Nav from "./UI/Nav";
// Import all sub-components (create them if they don't exist yet)
import Handbag from "./Page/Handbag";
import Bagtothesea from "./Page/Bagtothesea"
import BagSchool from "./Page/BagSchool";
import Workbag from "./Page/Workbag";
import Localbag from "./Page/Localbag";
import Eventbag from "./Page/Eventbag";
import Hikingbag from "./Page/Hikingbag";
import Sportyslingbag from "./Page/Sportyslingbag";
import Practicalmessengerbag from "./Page/Practicalmessengerbag";
import Convenienttotebag from "./Page/Convenienttotebag";
import Boxycrossbodybag from "./Page/Boxycrossbodybag";

function Main() {
  return (
    <Router>
      <div className="app">  {/* Optional wrapper for full-page styling */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          {/* Nested Women Routes */}
          <Route path="/women" element={<Women />}>
            {/* <Route index element={<div>Welcome to Women's Bags! Select a style.</div>} />  Optional: Content for exact /women */}
            <Route path="handbag" element={<Handbag />} />
            <Route path="bagtothesea" element={<Bagtothesea />} />
            <Route path="bagschool" element={<BagSchool />} />
            <Route path="workbag" element={<Workbag />} />
            <Route path="localbag" element={<Localbag />} />
            <Route path="eventbag" element={<Eventbag />} />
            <Route path="hikingbag" element={<Hikingbag />} />
          </Route>

          {/* Nested Men Routes */}
          <Route path="/men" element={<Men />}>
            {/* <Route index element={<div>Welcome to Men's Bags! Select a style.</div>} /> */}
            <Route path="sportyslingbag" element={<Sportyslingbag />} />
            <Route path="practicalmessengerbag" element={<Practicalmessengerbag />} />
            <Route path="convenienttotebag" element={<Convenienttotebag />} />
            <Route path="boxycrossbodybag" element={<Boxycrossbodybag />} />
          </Route>

          {/* Optional 404 */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;