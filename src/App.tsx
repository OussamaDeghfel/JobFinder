import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Jobs from './components/jobs'
import JobFinderHome from "./components/jobFinderHome";
import ApplyingForm from "./components/applyingForm";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Jobs /> */}
      <Router>
        <Routes>
          <Route path="/" element={<JobFinderHome />} />
          <Route path="/applyingForm" element={<ApplyingForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
