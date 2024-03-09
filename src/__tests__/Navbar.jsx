import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Navbar from "../features/homepage/Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  test("renders correctly", () => {
    render(<Navbar />, {
      wrapper: BrowserRouter,
    });
    const signUpButton = screen.getByTestId("button");
    expect(signUpButton).toBeInTheDocument();
  });
});
