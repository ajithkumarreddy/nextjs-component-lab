import { act } from "react";
import { render, screen } from "@testing-library/react";
import TrafficLight from "../traffic-light";
import { config } from "../traffic-light.config";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe("TrafficLight component", () => {
  it("starts with green light", () => {
    render(<TrafficLight />);
    expect(screen.getByText(/Current: green/i)).toBeInTheDocument();
  });

  it("transitions from green → yellow after duration", () => {
    render(<TrafficLight />);

    act(() => {
      jest.advanceTimersByTime(config.green.duration);
    });

    expect(screen.getByText(/Current: yellow/i)).toBeInTheDocument();
  });

  it("transitions from yellow → red after duration", () => {
    render(<TrafficLight />);

    // advance through green first
    act(() => {
      jest.advanceTimersByTime(config.green.duration);
    });

    act(() => {
      jest.advanceTimersByTime(config.yellow.duration);
    });

    expect(screen.getByText(/Current: red/i)).toBeInTheDocument();
  });

  it("cycles back to green after red", () => {
    render(<TrafficLight />);

    // green -> yellow
    act(() => {
      jest.advanceTimersByTime(config.green.duration);
    });

    // yellow -> red
    act(() => {
      jest.advanceTimersByTime(config.yellow.duration);
    });

    // red -> green
    act(() => {
      jest.advanceTimersByTime(config.red.duration);
    });

    expect(screen.getByText(/Current: green/i)).toBeInTheDocument();
  });
});
