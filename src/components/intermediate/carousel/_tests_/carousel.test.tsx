import { act } from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "../carousel";
import userEvent from "@testing-library/user-event";

describe("Carousel testing", () => {
  it("renders initial slide and navigates slides", async () => {
    render(<Carousel autoPlay={false} />);

    // Check first slide
    const firstSlide = screen.getByRole("img", { name: /slide 0/i });
    expect(firstSlide).toBeInTheDocument();

    // Check slide index
    expect(screen.getByText("1 / 3")).toBeInTheDocument();

    // Previous slide button
    const previousSlide = screen.getByRole("button", {
      name: /Previous Slide/i,
    });
    await userEvent.click(previousSlide);

    // Clicking previous from first slide goes to last slide
    expect(screen.getByText("3 / 3")).toBeInTheDocument();

    // Next slide button
    const nextSlide = screen.getByRole("button", { name: /Next Slide/i });
    await userEvent.click(nextSlide);

    // Back to first slide
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  it("renders next slide when autoPlay is true", async () => {
    jest.useFakeTimers();

    render(<Carousel />);

    // Check first slide
    const firstSlide = screen.getByRole("img", { name: /slide 0/i });
    expect(firstSlide).toBeInTheDocument();

    // Check slide index
    expect(screen.getByText("1 / 3")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(10000);
    });

    // Check first slide
    const secondSlide = screen.getByRole("img", { name: /slide 1/i });
    expect(secondSlide).toBeInTheDocument();

    // Check slide index
    expect(screen.getByText("2 / 3")).toBeInTheDocument();
  });
});
