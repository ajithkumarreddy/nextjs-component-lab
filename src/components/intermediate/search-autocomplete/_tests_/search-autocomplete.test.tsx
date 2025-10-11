import { render, screen, waitFor } from "@testing-library/react";
import SearchAutoComplete from "../search-autocomplete";
import userEvent from "@testing-library/user-event";

const mockProducts = [
  {
    id: 1,
    title: "Samsung battery",
    price: 12,
    thumbnail: "www.example.com",
  },
  {
    id: 2,
    title: "Apple battery parts",
    price: 32,
    thumbnail: "www.example.com",
  },
];

describe("Search Autocomplete Testing", () => {
  it("renders and fetches search results", async () => {
    (global.fetch as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ products: mockProducts }),
      })
    );

    render(<SearchAutoComplete />);

    const searchInput = screen.getByTestId("search-term");
    await userEvent.type(searchInput, "battery");

    expect(searchInput).toHaveValue("battery");

    await waitFor(() => {
      expect(screen.getByText(/Samsung battery/i)).toBeInTheDocument();
      expect(screen.getByText(/Apple battery/i)).toBeInTheDocument();
    });
  });

  it("should handle empty results gracefully", async () => {
    (global.fetch as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ products: [] }),
      })
    );

    render(<SearchAutoComplete />);

    const searchInput = screen.getByTestId("search-term");
    await userEvent.type(searchInput, "battery");

    await waitFor(() => {
      expect(screen.getByText(/No search results found/i)).toBeInTheDocument();
    });
  });

  it("should handle fetch error gracefully", async () => {
    (global.fetch as jest.Mock) = jest.fn(() =>
      Promise.reject(new Error("API failure"))
    );

    render(<SearchAutoComplete />);

    const searchInput = screen.getByTestId("search-term");
    await userEvent.type(searchInput, "battery");

    await waitFor(() => {
      expect(screen.getByText(/No search results found/i)).toBeInTheDocument();
    });
  });
});
