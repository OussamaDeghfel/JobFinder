import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Filters from "./components/filters";
// import JobFinderHome from "./components/jobFinderHome";
import NavBar from "./components/navBar";
import ApplyingForm from "./components/applyingForm";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Filters />} />
            <Route path="/applyingForm" element={<ApplyingForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
