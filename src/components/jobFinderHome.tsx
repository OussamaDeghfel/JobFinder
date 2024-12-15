import Filters from "./filters";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplyingForm from "./applyingForm";
import NavBar from "./navBar";

const JobFinderHome = () => {
  return (
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
  );
};

export default JobFinderHome;
