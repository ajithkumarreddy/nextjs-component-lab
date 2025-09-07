import { render, screen } from "@testing-library/react";
import Timer from "../timer";
import { act } from "react";

describe("Time Counter", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2025-09-06T12:34:56"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders time correctly and updates every second", () => {
    render(<Timer />);

    expect(screen.getByText(12)).toBeInTheDocument();
    expect(screen.getByText(34)).toBeInTheDocument();
    expect(screen.getByText(56)).toBeInTheDocument();

    // Advance by 1 second
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText(57)).toBeInTheDocument();
  });
});
