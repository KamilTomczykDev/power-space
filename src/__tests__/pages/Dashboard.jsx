import { describe, expect, test, vi } from "vitest";
import { renderWithClient } from "../utils/helpers";
import { screen } from "@testing-library/react";
import Dashboard from "../../pages/Dashboard";

vi.mock("../../ui/PrimaryStats", () => ({
  default: () => {
    return <div>Test</div>;
  },
}));

vi.mock("../../ui/SecondaryStats", () => ({
  default: () => {
    return <div>Test</div>;
  },
}));

vi.mock("../../features/profiles/useCurrentProfile", () => ({
  useCurrentProfile: vi.fn(() => ({
    profile: [{ id: "mocked-id" }],
    isLoading: false,
  })),
}));

describe("Dashboard page", () => {
  test("renders content when loading is finished", async () => {
    renderWithClient(<Dashboard />);
    const titleElement = screen.getByText(/dashboard/i);
    expect(titleElement).toBeInTheDocument();
  });
});
