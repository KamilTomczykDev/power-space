import { describe, expect, test, vi } from "vitest";
import { renderWithClient } from "../utils/helpers";
import Friends from "../../pages/Friends";
import { screen } from "@testing-library/react";

vi.mock("../../features/profiles/useCurrentProfile", () => ({
  useCurrentProfile: vi.fn(() => ({
    profile: [{ id: 1, friends: [] }],
    isLoading: false,
  })),
}));

vi.mock("../../features/profiles/useProfiles", () => ({
  useProfiles: vi.fn(() => ({
    profiles: [{ id: 1 }],
    isLoading: false,
  })),
}));

describe("Friends page", () => {
  test("renders content when loading is finished", async () => {
    renderWithClient(<Friends />);
    const titleElement = screen.getByRole("heading", {
      level: 2,
    });
    // Check if the form and its elements are rendered
    expect(titleElement).toBeInTheDocument();
  });
});
