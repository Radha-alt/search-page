export const fetchJobs = async (filters) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "PR Account Executive",
            location: "London, UK",
            salary: "£25000 - £27000",
          },
          {
            id: 2,
            title: "Graduate Vendor Alliance Executive",
            location: "Ammanford, UK",
            salary: "£24000",
          },
        ]);
      }, 1000);
    });
  };
  
  