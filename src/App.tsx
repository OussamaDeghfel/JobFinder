import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Filters from "./components/filters";
import ApplyingForm from "./components/applyingForm";
// import JobFinderHome from "./components/jobFinderHome";

function App() {
  return (
    <>
      <div className="w-full h-screen border-2 border-red-500">
        <div className="flex flex-col h-28 w-full bg-blue-500 dark:bg-slate-800 p-5 rounded-b-full">
          <NavBar />
          <div className="flex flex-col items-center m-auto -translate-y-8">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Filters />} />
                <Route path="/applyingForm" element={<ApplyingForm />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
