import { describe, expect, test, vi } from "vitest";
import { renderWithClient } from "../utils/helpers";
import { screen } from "@testing-library/react";
import Wall from "../../pages/Wall";

vi.mock("../../features/profiles/useProfiles", () => ({
  useProfiles: vi.fn(() => ({
    profiles: [{ id: 1 }],
    isLoading: false,
  })),
}));
vi.mock("../../features/posts/usePosts", () => ({
  usePosts: vi.fn(() => ({
    posts: [{ id: 1 }],
    isLoading: false,
  })),
}));

describe("Wall page", () => {
  test("renders content when loading is finished", async () => {
    renderWithClient(<Wall />);
    const titleElement = screen.getByRole("heading", {
      level: 2,
    });
    // Check if the form and its elements are rendered
    expect(titleElement).toBeInTheDocument();
  });
});
