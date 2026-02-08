# search-page
This is a React-based job search application that allows users to search for jobs based on salary and location. The project is built using React.js, Tailwind CSS, and Axios for API calls.
## Purpose
This project was built to practice building a small, real-world React application with dynamic filtering, API integration, and a responsive UI. It focuses on clean component structure and state management for search-based interfaces.


Features
## Tech Stack
- React (functional components and hooks)
- Tailwind CSS for responsive styling
- Axios for API requests
- JavaScript (ES6+)

✔ Search Jobs based on Salary & Location
✔ Responsive UI with a clean layout
✔ Reusable Components for Filters & Results
✔ Dynamic API Integration using axios
✔ Styled Header with navigation

📂 Folder Structure
job-search/
│── public/                     # Static assets (logo, favicon, etc.)
│── src/
│   ├── components/              # Reusable UI components
│   │   ├── Header.js            # Header with logo & navigation
│   │   ├── Filters.js           # Dropdown filters for Salary & Location
│   │   ├── ResultsList.js       # Displays job search results
│   ├── styles/                  # CSS files
│   │   ├── Header.css           # Styling for the header
│   │   ├── styles.css           # Global styles
│   ├── api.js                   # API functions (fetchJobs)
│   ├── SearchPage.js            # Main job search page
│   ├── App.js                   # Main entry component
│   ├── index.js                 # React entry file
│── package.json                 # Project dependencies & scripts
│── README.md                    # Documentation
💻 Installation & Setup
Follow these steps to set up the project on your local machine.

1️⃣ Prerequisites
Ensure you have the following installed:

Node.js (v16+ recommended)
npm (or yarn as an alternative)
Check installation:
node -v
npm -v

2️⃣ Clone the Repository
git clone https://github.com/your-repo/job-search.git
cd job-search

3️⃣ Install Dependencies
npm install

🚀 Running the Project
Start the development server:
npm start
Open http://localhost:3000 in your browser to view the app.

🧪 Running Tests
To run Jest tests:
npm test

## Learnings & Improvements
Through this project, I gained hands-on experience in structuring React components, managing state for filters, and integrating APIs using Axios.  
If I were to continue developing this project, I would add pagination, better error handling, and unit tests to improve performance and reliability.
