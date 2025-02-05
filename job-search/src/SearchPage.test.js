
import SearchPage from "./SearchPage";
import Header from "../components/header";
import { render, screen } from '@testing-library/react';



test("renders header correctly", () => {
  render(<Header />);
  expect(screen.getByText(/THE OPPORTUNITY HUB UK/i)).toBeInTheDocument();
  expect(screen.getByText(/Opportunities/i)).toBeInTheDocument();
});


test("renders job search page", () => {
  render(<SearchPage />);
  expect(screen.getByText("Job Search")).toBeInTheDocument();
});

test("filters jobs correctly", async () => {
  render(<SearchPage />);
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "NY" } });
  fireEvent.click(screen.getByText("Search"));
  expect(await screen.findByText("Frontend Engineer")).toBeInTheDocument();
});
