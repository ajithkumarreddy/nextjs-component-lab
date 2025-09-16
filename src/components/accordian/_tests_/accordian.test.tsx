import { render, screen } from "@testing-library/react";
import Accordian from "../accordian";
import { act } from "react";
import userEvent from "@testing-library/user-event";

describe("Accordian", () => {
  it("should hide the content by default", () => {
    render(<Accordian />);
    expect(
      screen.queryByText("React is a JavaScript library for building UIs.")
    ).not.toBeInTheDocument();
  });

  it("should toggle content on multiple clicks", async () => {
    render(<Accordian />);
    const button = screen.getByRole("button", { name: /What is React?/i });

    // Open
    await userEvent.click(button);
    expect(
      screen.getByText("React is a JavaScript library for building UIs.")
    ).toBeInTheDocument();

    // Close
    await userEvent.click(button);
    expect(
      screen.queryByText("React is a JavaScript library for building UIs.")
    ).not.toBeInTheDocument();
  });
});
