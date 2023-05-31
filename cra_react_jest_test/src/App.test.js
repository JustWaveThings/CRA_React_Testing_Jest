import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("App Component Header", () => {
  it("Renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", {name: /test jest/i})).toBeInTheDocument();
  });
});
