import { useState } from "react";

const Filters = ({ onFilter }) => {
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onFilter({ salary, location });
  };

  return (
    <div className="filter-container">
      <select className="filter-dropdown" value={salary} onChange={(e) => setSalary(e.target.value)}>
        <option value="">Select Salary</option>
        <option value="30k-40k">30k - 40k</option>
        <option value="40k-50k">40k - 50k</option>
        <option value="50k-60k">50k - 60k</option>
      </select>

      <select className="filter-dropdown" value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">Select Location</option>
        <option value="London">London</option>
        <option value="Manchester">Manchester</option>
        <option value="Birmingham">Birmingham</option>
      </select>

      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Filters;
