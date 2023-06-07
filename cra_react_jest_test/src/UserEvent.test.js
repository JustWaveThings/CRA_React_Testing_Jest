import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import UserEvent from "./UserEvent";

describe("App component", () => {
  it("renders test jest heading", () => {
    const { container } = render(<UserEvent />);
    expect(container).toMatchSnapshot();
  });
  it('renders "not testing jest" heading when button is clicked', async () => {
    const user = userEvent.setup();
    render(<UserEvent />);
    const button = screen.getByRole("button", { name: /click me/i });

    await act(async () => {
      await user.click(button);
    });

    expect(screen.getByRole("heading").textContent).toMatch(
      /Not Testing Jest/i
    );
  });
});
