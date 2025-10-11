import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../counter";

describe("Counter", () => {
  it("should display initial count as 0", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("Should increment the count when increment button is clicked", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "+" });

    await userEvent.click(incrementButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("Should decrement the count when decrement button is clicked", async () => {
    render(<Counter initialValue={1} />);
    const decrementButton = screen.getByRole("button", { name: "-" });

    await userEvent.click(decrementButton);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("should reset the count back to 0 when reset button is clicked", async () => {
    render(<Counter initialValue={5} />);
    const resetButton = screen.getByRole("button", { name: /reset/i });
    const incrementButton = screen.getByRole("button", { name: "+" });

    await userEvent.click(incrementButton);
    expect(screen.getByText("6")).toBeInTheDocument();

    await userEvent.click(resetButton);
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
