import { render, screen } from "@testing-library/react";
import Header from "../header";

// mock navigation
jest.mock("next/navigation", () => ({
    useRouter: () => ({
        push: jest.fn(),
        back: jest.fn(),
    }),
    usePathname: () => "/",
}));

describe("Header", () => {
  it("renders logo without crashing", () => {
    render(<Header />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders back link", () => {
    render(<Header isBackEnabled={true}/>);
    const backLink = screen.getByRole("link");
    expect(backLink).toBeInTheDocument();
  });
});
