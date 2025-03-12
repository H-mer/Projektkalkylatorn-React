import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import NewProjectButton from "./components/newProjectButton";
import IndexPage from "./pages/index";
import Projektinformation from "./pages/projektinformation";
import RollerTimpris from "./pages/roller_timpris";
import Utrakning from "./pages/utrakning";

function App() {
  return (
    <Router>
      <Header />
      <NewProjectButton />
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/projektinformation" element={<Projektinformation />} />
          <Route path="/roller_timpris" element={<RollerTimpris />} />
          <Route path="/utrakning" element={<Utrakning />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
