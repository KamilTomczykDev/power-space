import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import SettingsForm from "../../features/settings/SettingsForm";
import { renderWithClient } from "../utils/helpers";

describe("Settings page", () => {
  test("should render correctly", async () => {
    renderWithClient(<SettingsForm profile={[{ id: 0, isVisible: true }]} />);
    const buttonElement = await screen.findByRole("button", {
      name: "Submit",
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
