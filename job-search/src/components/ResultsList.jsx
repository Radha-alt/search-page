const ResultsList = ({ results }) => {
    return (
      <div className="p-4">
        {results.length === 0 ? (
          <p>No results found</p>
        ) : (
          results.map((job) => (
            <div key={job.id} className="border p-2 mb-2">
              <h3>{job.title}</h3>
              <p>{job.location} - ${job.salary}</p>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default ResultsList;
  