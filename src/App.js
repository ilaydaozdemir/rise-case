import React, { useState } from "react";

import { AppContext, initialJobs } from "./context";
import CreateJob from "./components/CreateJob";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JobList from "./components/JobList";

function App() {
  const [jobs, setJobs] = useState(initialJobs);

  const dispatcher = ({ type, payload }) => {
    switch (type) {
      case "ADD_JOB":
        setJobs([...jobs, payload]);
        break;
      case "DELETE_JOB":
        const newJobs = [...jobs];
        newJobs.splice(payload, 1);
        setJobs(newJobs);
        break;
      default:
        break;
    }
  }

  return (
    <AppContext.Provider value={{ jobs, dispatcher }}>
      <div className="App">
        <Header />
        <CreateJob />
        <JobList />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
