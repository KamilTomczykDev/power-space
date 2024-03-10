import { screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import AddPost from "../../features/posts/AddPost";
import { renderWithClient } from "../utils/helpers";

describe.skip("AddPost", () => {
  describe("correctly renders", () => {
    test("post text input", async () => {
      renderWithClient(<AddPost />);
      const textInput = screen.getByRole("textbox");
      await waitFor(() => expect(textInput).toBeInTheDocument(), {
        timeout: 5000,
      });
    });
  });
});
