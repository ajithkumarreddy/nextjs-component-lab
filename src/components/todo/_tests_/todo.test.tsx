import { render, screen, waitFor } from "@testing-library/react";
import Todo from "../todo";

const mockTodos = [
  {
    id: 1,
    userId: 1,
    title: "Submit a PR",
    completed: false,
  },
  {
    id: 2,
    userId: 1,
    title: "Create a component",
    completed: false,
  },
];

beforeEach(() => {
  (global.fetch as jest.Mock) = jest.fn(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockTodos),
    });
  });
});

describe("Todo", () => {
  it("renders the list on component mount", async () => {
    render(<Todo />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Submit a PR/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Create a component/i)).toBeInTheDocument();
  });
});
