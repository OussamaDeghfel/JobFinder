import Filters from "./filters";

const JobFinderHome = () => {
  return (
    <div className="flex flex-col h-28 w-full bg-blue-500 dark:bg-slate-800 p-5 rounded-b-full">
      {/* <NavBar /> */}
      <div className="flex flex-col items-center m-auto -translate-y-8">
        {/* <Routes>
          <Route path="/" element={<Filters />} />
          <Route path="/applyingForm" element={<ApplyingForm />} />
        </Routes> */}
        <Filters />
      </div>
    </div>
  );
};

export default JobFinderHome;
