import { useState } from "react";
import Filters from "./components/Filters";
import ResultsList from "./components/ResultsList";
import Header from "./components/header"; // Ensure correct import
import axios from "axios";
import "./styles.css";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const fetchJobs = async (filters) => {
    try {
      setError("");
      const response = await axios.get("/api/jobs", { params: filters });
      setResults(response.data);
    } catch (err) {
      setError("Failed to fetch job listings.");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Job Search</h1>
        <Filters onFilter={fetchJobs} />
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <ResultsList results={results} />
      </div>
    </div>
  );
};

export default SearchPage;
