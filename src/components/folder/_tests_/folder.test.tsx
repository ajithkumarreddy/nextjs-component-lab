import { render, screen } from "@testing-library/react";
import Folder from "../folder";
import userEvent from "@testing-library/user-event";

describe("Folder Structure", () => {
  it("renders the folder tree structure", () => {
    render(<Folder />);
    expect(screen.getByText("root")).toBeInTheDocument();
  });

  it("should open the folder when clicked on it", async () => {
    render(<Folder />);
    const folder = screen.getByText("root");
    await userEvent.click(folder);
    expect(screen.getByText("src")).toBeInTheDocument();
  });
});
