import { render, screen } from "@testing-library/react";
import ThemeMode from "../theme-mode";
import { ThemeProvider } from "../hooks/useTheme";
import userEvent from "@testing-library/user-event";

describe("Theme Mode", () => {
  it("renders without crashing", () => {
    render(
      <ThemeProvider>
        <ThemeMode />
      </ThemeProvider>
    );
    expect(screen.getByText("🌙 Dark Mode")).toBeInTheDocument();
  });

  it("Should throw error without ThemeProvider", () => {
    expect(() => render(<ThemeMode />)).toThrow(
      "useTheme must be used within ThemeProvider"
    );
  });

  it("Should toggle between themes", async () => {
    render(
      <ThemeProvider>
        <ThemeMode />
      </ThemeProvider>
    );

    const darkModeButton = screen.getByRole("button", { name: /🌙 Dark Mode/i });
    await userEvent.click(darkModeButton);
    expect(screen.getByText("☀️ Light Mode")).toBeInTheDocument();

    const lightModeButton = screen.getByRole("button", { name: /☀️ Light Mode/i });
    await userEvent.click(lightModeButton);
    expect(screen.getByText("🌙 Dark Mode")).toBeInTheDocument();
  });
});
