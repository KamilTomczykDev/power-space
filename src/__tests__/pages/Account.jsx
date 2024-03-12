import { describe, expect, test, vi } from "vitest";
import { renderWithClient } from "../utils/helpers";
import Account from "../../pages/Account";
import { screen } from "@testing-library/react";

vi.mock("../../features/profiles/useCurrentProfile", () => ({
  useCurrentProfile: vi.fn(() => ({
    profile: {
      user: {
        email: "hey@gmail.com",
        user_metadata: {
          username: "hey",
        },
      },
    },

    isLoading: false,
  })),
}));

vi.mock("../../features/authentication/UsernameUpdateForm", () => ({
  default: () => {
    return <div>Test</div>;
  },
}));

describe("Account page", () => {
  test("renders content when loading is finished", async () => {
    renderWithClient(<Account />);
    const titleElement = screen.getByText(/control your account data./i);
    expect(titleElement).toBeInTheDocument();
  });
});
