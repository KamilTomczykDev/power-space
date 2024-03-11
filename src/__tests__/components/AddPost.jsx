import { fireEvent, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import AddPost from "../../features/posts/AddPost";
import { renderWithClient } from "../utils/helpers";

vi.mock("../../features/profiles/useCurrentProfile", () => ({
  useCurrentProfile: vi.fn(() => ({
    profile: [{ id: "mocked-id" }],
    isLoading: false,
  })),
}));

vi.mock("../../features/posts/useInsertPost", () => ({
  useInsertPost: vi.fn(() => ({
    insertPost: vi.fn(),
    isPosting: false,
  })),
}));

describe("AddPost", () => {
  test("renders content when isLoading is false", async () => {
    renderWithClient(<AddPost />);
    const textBox = screen.getByPlaceholderText(
      "Your thoughts about last workout...",
    );
    const postButton = screen.getByRole("button", {
      name: "Add post",
    });
    // Check if the form and its elements are rendered
    expect(textBox).toBeInTheDocument();
    expect(postButton).toBeInTheDocument();
  });

  // Add more test cases based on the specific behavior of your component
  test("submits the form successfully", async () => {
    renderWithClient(<AddPost />);
    const textBox = screen.getByPlaceholderText(
      "Your thoughts about last workout...",
    );

    // Simulate user input
    fireEvent.change(textBox, {
      target: { value: "Test post content" },
    });

    // Trigger form submission
    const postButton = screen.getByRole("button");
    fireEvent.click(postButton);

    // You might want to wait for the asynchronous behavior, like API calls, to complete
    await waitFor(
      () => {
        // Add assertions based on the expected behavior after form submission
        // For example, check if a success message is displayed
      },
      { timeout: 2000 },
    );
  });

  test("resets the form after submit button", async () => {
    renderWithClient(<AddPost />);
    const textBox = screen.getByPlaceholderText(
      "Your thoughts about last workout...",
    );

    fireEvent.change(textBox, {
      target: { value: "Test post content" },
    });
    const postButton = screen.getByRole("button");
    fireEvent.click(postButton);

    await waitFor(expect(textBox).toHaveValue(""));
  });
});
