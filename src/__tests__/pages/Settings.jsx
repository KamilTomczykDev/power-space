import { describe, expect, test, vi } from "vitest";
import { renderWithClient } from "../utils/helpers";
import { screen } from "@testing-library/react";
import Settings from "../../pages/Settings";

vi.mock("../../features/profiles/useCurrentProfile", () => ({
  useCurrentProfile: vi.fn(() => ({
    profile: [{ id: 1 }],
    isLoading: false,
  })),
}));

describe("Settings page", () => {
  test("renders content when loading is finished", async () => {
    renderWithClient(<Settings />);
    const titleElement = screen.getByRole("heading", {
      level: 2,
    });
    // Check if the form and its elements are rendered
    expect(titleElement).toBeInTheDocument();
  });
});
